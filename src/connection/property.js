import { useMutation, useQuery } from "@tanstack/react-query";
import http from "./config";

export const useCreateProperty = (config) => {
  return useMutation({
    mutationFn: (data) => {
      return http.post(`/api/property`, data);
    },
    ...config,
  });
};

export const useCategories = (config) => {
  return useQuery({
    queryKey: ["fetchCategories"],
    queryFn: () => http.get(`/api/categories`),
    ...config,
  });


};
