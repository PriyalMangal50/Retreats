import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { loginApi, registerApi, meApi, sendOtpApi, verifyOtpApi, updateProfileApi } from './api';
import { useAuth } from '../../store/auth';

export function useLogin() {
  const setAuth = useAuth((s) => s.setAuth);
  const qc = useQueryClient();

  return useMutation({
    mutationFn: loginApi,
    onSuccess: (res) => {
      const token = res?.data?.token;
      const user = res?.data?.user;
      if (token && user) {
        setAuth({ token, user });
        qc.invalidateQueries({ queryKey: ['me'] });
      }
    },
  });
}

export function useRegister() {
  return useMutation({
    mutationFn: registerApi,
  });
}

export function useMe(enabled = true) {
  return useQuery({
    queryKey: ['me'],
    queryFn: meApi,
    select: (res) => res.data,
    enabled,
  });
}

export function useSendOtp() {
  return useMutation({ mutationFn: sendOtpApi });
}

export function useVerifyOtp() {
  return useMutation({ mutationFn: verifyOtpApi });
}

export function useUpdateProfile() {
  const updateUser = useAuth((s) => s.updateUser);
  const qc = useQueryClient();

  return useMutation({
    mutationFn: updateProfileApi,
    onSuccess: (res) => {
      const updated = res?.data;
      if (updated) {
        // Normalize avatar shape for UI
        updateUser({
          ...updated,
          avatarUrl: (updated as any).userAvatar || (updated as any).avatarUrl,
        });
      }
      qc.invalidateQueries({ queryKey: ['me'] });
    },
  });
}