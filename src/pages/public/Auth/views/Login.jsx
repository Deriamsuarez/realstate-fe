import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLogin } from "@/connection/user";
import { useDispatch } from "react-redux";
import authSlice from "@/store/auth";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { mutate } = useLogin();

  const dispatch = useDispatch();

  const submit = (data) => {
    mutate(
      { ...data },
      {
        onSuccess: (data) => {
          console.log(data);
          dispatch(authSlice.actions.setUser(data));
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <div className="flex items-center justify-center flex-col gap-2 min-h-screen">
      <form
        onSubmit={handleSubmit(submit)}
        className="p-4 rounded-md shadow-md bg-white min-w-[300px] flex flex-col gap-4"
      >
        <h3 className="font-bold text-xl text-center text-primary-500">Login</h3>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <div>
            <input
              type="text"
              name="email"
              id="email"
              className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                errors.email ? "ring-red-600" : "ring-gray-300"
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6`}
              placeholder="you@example.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                errors.password ? "ring-red-600" : "ring-gray-300"
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6`}
              placeholder="Contraseña"
              {...register("password")}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-600" role="alert">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-x-1.5 rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
        >
          Sign in
        </button>

        <Link
          className="underline underline-offset-2 text-primary-500 hover:text-primary-400"
          to={"/forgot-password"}
        >
          I forgot my password
        </Link>
      </form>
      <Link
        className="underline underline-offset-2 text-primary-500 hover:text-primary-400"
        to={"/register"}
      >
        Create account
      </Link>
    </div>
  );
};

export default Login;
