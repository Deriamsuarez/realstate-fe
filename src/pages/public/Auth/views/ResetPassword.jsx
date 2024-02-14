import React from "react";
import UserCircleIcon from "@heroicons/react/24/outline/UserCircleIcon";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { object, string, ref } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import { useResetPassword } from "@/connection/user";

const schema = object().shape({
  password: string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirm_password: string().oneOf([ref('password'), null], 'Passwords must match').required('Please confirm your password'),
});

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
const {token} = useParams()

  const { mutate } = useResetPassword(token);
  const navigate = useNavigate()

  const { password, confirm_password } = errors;

  const submit = (data) => {
    mutate(
      { ...data },
      {
        onSuccess: (data) => {
            toast.success("We sent you an email");
            navigate('/login')
        },
        onError: (error) => {
          toast.error(error.message);
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
        <h3 className="font-bold text-xl text-center text-primary-500">
          Reset Password
        </h3>

        <div>
          <label
            htmlFor="password"
            className={`block text-sm font-medium leading-6 ${
              !password ? "text-gray-900" : "text-red-500"
            } `}
          >
            Your New Password
          </label>
          <div className="relative">
            <input
              type="password"
              name="password"
              id="password"
              className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  ${
                !password
                  ? "ring-gray-300 placeholder:text-gray-400 focus:ring-primary-500"
                  : "ring-red-600 placeholder:text-red-400 focus:ring-red-500"
              }  focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6`}
              placeholder="Your new password here"
              {...register("password")}
            />
            {password && (
              <p className="absolute text-sm text-red-600" id="password-error">
                {password.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="confirm_password"
            className={`block text-sm font-medium leading-6 ${
              !confirm_password ? "text-gray-900" : "text-red-500"
            } `}
          >
            Repeat Password
          </label>
          <div className="relative">
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  ${
                !confirm_password
                  ? "ring-gray-300 placeholder:text-gray-400 focus:ring-primary-500"
                  : "ring-red-600 placeholder:text-red-400 focus:ring-red-500"
              }  focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6`}
              placeholder="Confirm your new password"
              {...register("confirm_password")}
            />
            {confirm_password && (
              <p className="absolute text-sm text-red-600" id="confirm-password-error">
                {confirm_password.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-x-1.5 rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
        >
          <UserCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
          Send Email
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
