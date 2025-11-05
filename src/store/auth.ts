import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '../types/auth';

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setAuth: (payload: { user: User; token: string }) => void;
  clearAuth: () => void;
  updateUser: (partial: Partial<User>) => void;
};

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      setAuth: ({ user, token }) => set({ user, token, isAuthenticated: true }),
      clearAuth: () => set({ user: null, token: null, isAuthenticated: false }),
      updateUser: (partial) => {
        const current = get().user;
        if (!current) return;
        set({ user: { ...current, ...partial } });
      },
    }),
    { name: 'auth' } // localStorage key
  )
);