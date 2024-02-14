import { store } from "@/store";
import { logout } from '@/hooks/useLogout'

export const requestInterceptor = {
  onSuccess: (config) => {
    const state = store.getState();

    config.headers = {
      Authorization: `Bearer ${state.auth.accessToken}`,
      Accept: "application/json",
    };
    return config;
  },
  onFailed: (error) => {
    return error;
  },
};

export const responseInterceptor = {
  onSuccess: (config) => {
    return config.data;
  },
  onFailed: (error) => {
    if (error.response.status === 401) {
      logout()
      throw new Error("Ha ocurrido un error");
    }

    throw new Error(
      error.response?.data?.message || error.message || "Ha ocurrido un error"
    );
  },
};