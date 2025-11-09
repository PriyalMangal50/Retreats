import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, isSupported, onMessage, Messaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

let messagingInstance: Messaging | null = null;

export async function initMessaging() {
  const supported = await isSupported().catch(() => false);
  if (!supported) return null;

  // Important: service worker must be at site root
  const swReg = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
  messagingInstance = getMessaging(app);

  return { messaging: messagingInstance, swReg };
}

export async function requestAndSyncFcmToken(authToken: string) {
  const apiBase = import.meta.env.VITE_API_BASE || '/api';
  const vapidKey = import.meta.env.VITE_FIREBASE_VAPID_KEY as string;
  if (!('Notification' in window)) return { granted: false, token: null };

  const permission = await Notification.requestPermission();
  if (permission !== 'granted') return { granted: false, token: null };

  if (!messagingInstance) {
    const init = await initMessaging();
    if (!init) return { granted: true, token: null };
  }

  const token = await getToken(messagingInstance!, {
    vapidKey,
    serviceWorkerRegistration: await navigator.serviceWorker.getRegistration(),
  });

  if (!token) return { granted: true, token: null };

  // Save to backend
  await fetch(`${apiBase}/usersfcmtokens`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`, // TODO: provide your app’s JWT here
    },
    body: JSON.stringify({ fcmToken: token }),
  });

  // Foreground notification handler
  onMessage(messagingInstance!, (payload) => {
    // Minimal example:
    const title = payload?.notification?.title ?? 'Notification';
    const body = payload?.notification?.body ?? '';
    // Native toast (optional)
    try {
      new Notification(title, { body, data: payload.data });
    } catch {
      // Fallback if browser blocks Notification() in foreground
      console.log('Foreground notification:', payload);
    }

    window.dispatchEvent(new CustomEvent('dashboard-notification', { detail: payload }));
  });

  return { granted: true, token };
}

export async function deleteTokenOnLogout(authToken: string) {
  const apiBase = import.meta.env.VITE_API_BASE || '/api';
  await fetch(`${apiBase}/usersfcmtokens`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${authToken}` },
  });
}