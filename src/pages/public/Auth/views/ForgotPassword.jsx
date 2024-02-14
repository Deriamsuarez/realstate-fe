import React, { useState } from "react";
import UserCircleIcon from "@heroicons/react/24/outline/UserCircleIcon";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useForgotPassword } from "@/connection/user";
import { toast } from "react-toastify";
import ChevronLeftIcon from "@heroicons/react/20/solid/ChevronLeftIcon"

const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useForgotPassword();

  const submit = (data) => {
    mutate(
      { ...data },
      {
        onSuccess: (data) => {
          console.log(data);
          setEmailSent(true);
          toast.success("we sent you an email");
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  };

  return (
    <div className="flex items-center justify-center flex-col gap-2 min-h-screen">
      {!emailSent ? (
        <form
          onSubmit={handleSubmit(submit)}
          className="p-4 rounded-md shadow-md bg-white min-w-[300px] flex flex-col gap-4"
        >
          <h3 className="font-bold text-xl text-center text-primary-500">
            Forgot Password
          </h3>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
                {...register("email")}
              />
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            <UserCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Send email{" "}
          </button>
        </form>
      ) : (
        <div className="p-4 rounded-md shadow-md bg-white text-center min-w-[300px] flex flex-col ">
          <p>we sent you an email, check your email</p>
          <Link className="flex items-center justify-center underline underline-offset-2 text-primary-500 hover:text-primary-400" to={'/login'}><ChevronLeftIcon className='w-5 h-5' /> Login</Link>

        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
