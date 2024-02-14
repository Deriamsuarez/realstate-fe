import React, { useState } from "react";
import UserCircleIcon from "@heroicons/react/24/outline/UserCircleIcon";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "@/connection/user";
import { object, ref, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import ConfirmationModal from "@/components/ConfirmationModal";

const schema = object().shape({
  name: string().required(),
  email: string().email().required(),
  password: string().min(6).required(),
  confirm_password: string().oneOf(
    [ref("password"), null],
    "Passwords must match"
  ),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Resolver de yup para react-hook-form
  });

  const singUp = useRegister();

  const [openModal, setOpenModal] = useState(false);

  const { name, email, password, confirm_password } = errors;

  const navigate = useNavigate();

  const confirmEmail = () => {
    setOpenModal(true);
    setTimeout(() => {
      setOpenModal(false);
      setTimeout(() => {
        // navigate("/login");
      }, 1000);
    }, 2000);
  };

  const submit = (payload) => {
    const { confirm_password, ...data } = payload;

    singUp.mutate(
      { ...data },
      {
        onSuccess: (data) => {
          confirmEmail();
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
        className="p-4 rounded-md shadow-md bg-white min-w-[300px] flex flex-col gap-6"
      >
        <h3 className="font-bold text-xl text-center text-primary-500">
          Register
        </h3>

        <div>
          <label
            htmlFor="name"
            className={`block text-sm font-medium leading-6 ${
              !name ? "text-gray-900" : "text-red-500"
            } `}
          >
            your name
          </label>
          <div className="relative">
            <input
              name="name"
              id="name"
              className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  ${
                !name
                  ? "ring-gray-300 placeholder:text-gray-400 focus:ring-primary-500"
                  : "ring-red-600 placeholder:text-red-400 focus:ring-red-500"
              }  focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6`}
              placeholder="Your name here"
              {...register("name")}
            />
            {name && (
              <p className="absolute text-sm text-red-600" id="email-error">
                {name.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className={`block text-sm font-medium leading-6 ${
              !email ? "text-gray-900" : "text-red-500"
            } `}
          >
            Your mail
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  ${
                !name
                  ? "ring-gray-300 placeholder:text-gray-400 focus:ring-primary-500"
                  : "ring-red-600 placeholder:text-red-400 focus:ring-red-500"
              }  focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6`}
              placeholder="you@example.com"
              {...register("email")}
            />
            {name && (
              <p className="absolute text-sm text-red-600" id="email-error">
                {name.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className={`block text-sm font-medium leading-6 ${
              !password ? "text-gray-900" : "text-red-500"
            } `}
          >
            Password
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
              placeholder="Password"
              {...register("password")}
            />
            {password && (
              <p className="absolute text-sm text-red-600" id="email-error">
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
            Confirm password
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
              placeholder="Repit yoyr password"
              {...register("confirm_password")}
            />
            {confirm_password && (
              <p className="absolute text-sm text-red-600" id="email-error">
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
          Registrarme
        </button>
      </form>
      <Link
        className="underline underline-offset-2 text-primary-500 hover:text-primary-400"
        to={"/login"}
      >
        Ya tengo una cuenta
      </Link>
      <ConfirmationModal
        open={openModal}
        setOpen={setOpenModal}
        data={{
          title: "Sign up Successfully",
          description: "We have sent a confirmation email to your email",
        }}
        buttonText={"Redirecting to login"}
        // action={() => navigate("/login")}
      />
    </div>
  );
};

export default Register;
