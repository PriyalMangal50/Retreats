importScripts(
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyCpB_w5kXmA7e2oNEhNJxDloGVZHqMzF_Y",
  authDomain: "retreats-by-traveon.firebaseapp.com",
  projectId: "retreats-by-traveon",
  storageBucket: "retreats-by-traveon.firebasestorage.app",
  messagingSenderId: "663422694193",
  appId: "1:663422694193:web:b55a6f350b08ec1be3f610",
  measurementId: "G-4RB8R5P4R8",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload?.notification?.title || "Notification";
  const body = payload?.notification?.body || "";
  const data = payload?.data || {};

  self.registration.showNotification(title, {
    body,
    data,
  });
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetPath = event.notification?.data?.path || "/";

  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        const url = new URL(client.url);
        // Focus if already on the same origin; otherwise open a new window
        if ("focus" in client) {
          // Optionally navigate the existing client
          client.navigate?.(targetPath);
          return client.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow(targetPath);
    })
  );
});
