import { useCallback } from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { useQueryClient } from '@tanstack/react-query';
import { showToast } from '@/utils/toast';
import { SUCCESS_MESSAGES } from '@/constants/messages';

export const useSignout = () => {
  const queryClient = useQueryClient();
  const clearUser = useAuthStore((s) => s.clearUser);
  const navigate = useNavigate();

  const signout = useCallback(() => {
    localStorage.removeItem('token');
    showToast.success(SUCCESS_MESSAGES.auth.logout);
    clearUser();
    queryClient.clear();
    navigate(ROUTES.HOME);
  }, [clearUser, navigate, queryClient]);

  return signout;
};
