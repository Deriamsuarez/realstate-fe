import { useMutation, useQuery } from "@tanstack/react-query";
import http from "./config";

export const useLogin = () => {
  return useMutation((data) => {
    return http.post(`/auth/login`, data);
  });
};

export const useRegister = () => {
  return useMutation({ mutationFn: (data) => {
    return http.post(`/auth/register`, data);
  }});
};

export const useForgotPassword = () => {
  return useMutation((data) => {
    return http.post(`/auth/forgot-password`, data);
  });
};

export const useResetPassword = (id) => {
  return useMutation((data) => {
    return http.post(`/auth/reset-password/${id}`, data);
  });
};
