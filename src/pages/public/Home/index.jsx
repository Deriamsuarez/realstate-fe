import React, { useState } from "react";
import george from "@/assets/george.jpeg";
import { Transition } from "@headlessui/react";
import {
  ComputerDesktopIcon,
  HomeIcon,
  CameraIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import InputField from '@/components/InputField'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";


const schema = yup.object().shape({
  url: yup.string().url().required(),
});

const Home = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  
  const onSubmit = (data) => {
    if (data.url === "https://www.linkedin.com/in/georgegg") {
      setAuth(true);
    }else{
      toast.error('La url es incorrecta')
    }
  };

  const [auth, setAuth] = useState(false)
  const [isShowing, setIsShowing] = useState(true);
  const [isShowingForm, setisShowingForm] = useState(false);

  const handleNext = () => {
    if (isShowingForm) {
      console.log("ref");

      setisShowingForm(false);
      setTimeout(() => {
        setIsShowing(true);
      }, 300);
    } else {
      if (isShowing) {
        setIsShowing(true);
        setTimeout(() => {
          setisShowingForm(true);
        }, 300);
      } else {
        setisShowingForm(false);
        setTimeout(() => {
          setIsShowing(true);
        }, 300);
      }
      setIsShowing(false);
    }
  };

  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-[url('https://mediaim.expedia.com/destination/1/48ece95cf44f534a41c425496c1f4095.jpg')] ">
      {auth ?
        <div className="bg-black/40 w-full h-full">
          <div className=" w-full h-full flex items-center justify-center">
            <div className="w-3xl text-white p-6">
              <Transition
                show={isShowing}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="p-4 flex flex-col gap-4 items-center justify-center">
                  {/* <img
                  src={george}
                  className="w-40 h-40 rounded-full shadow-lg border-4 border-white "
                /> */}
                  <h1 className="text-4xl font-bold flex  items-center">
                    Enjoy your Dreams!
                  </h1>
                  <span className="text-justify max-w-2xl">
                    ¡Espero sinceramente que algún día puedas estar aquí, disfrutando
                    de todo aquello que tanto anhelas! Para mí, una estrategia que
                    siempre ha dado frutos es la visualización de mis metas y
                    darles forma concreta en mi mente (como lo hice con la imagen
                    de Duarte y como tengo una fecha escrita el fondo de mi
                    computador). Te animo a que te fijes fechas específicas para
                    alcanzar esas metas, al igual que lo hiciste cuando te
                    propusiste graduarte de la universidad. Imagínate, en una
                    fecha determinada, trabajando de forma remota y disfrutando de
                    una vida libre y plena en Punta Cana.
                  </span>
                  <br />
                  <span className="text-justify max-w-2xl">
                    Guarda la imagen que está en el fondo y espero que algún día
                    puedas recrearla a través del lente de tu teléfono.{" "}
                  </span>
                </div>
              </Transition>

              <Transition
                show={isShowingForm}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="">
                  <div className="flex flex-col text-lg gap-4 min-w-lg  uppercase">
                    <div className="flex gap-2">
                      <HomeIcon className="w-6 h-6" />
                      <span>Live</span>
                    </div>
                    <div className="flex gap-2">
                      <ComputerDesktopIcon className="w-6 h-6" />
                      <span>work</span>
                    </div>
                    <div className="flex gap-2">
                      <CameraIcon className="w-6 h-6" />
                      <span>vacation</span>
                    </div>
                  </div>
                  <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[300px] text-white/10">
                    [R]
                  </span>
                </div>
              </Transition>
            </div>
          </div>
          {/* Posicionamiento absoluto para el elemento 'R' */}
          <div></div>
          <button
            className="absolute bottom-8 uppercase  flex justify-center w-full items-center"
            onClick={handleNext}
          >
            <div className="bg-white flex gap-2 p-2 pl-3 rounded-md">
              <span>next</span>
              <ChevronRightIcon className="w-4" />
            </div>
          </button>
        </div>
      :

        <div className="bg-black/40 w-full h-full flex flex-col gap-2 items-center justify-center">
          <form className="flex flex-col items-center gap-2 bg-white p-4 rounded-lg" onSubmit={handleSubmit(onSubmit)}>
            <span className="font-bold text-primary-500">LOGIN</span>
            <InputField
              label='Linkedin Url'
              name='url'
              placehoder='https://link...'
              register={register}
              error={errors.url}
            />
            <button type="submit" className="p-2 mt-4 font-bold uppercase text-white bg-primary-500 w-full rounded-lg">Submit</button>
          </form>
        </div>
      }

    </div>
  );
};

export default Home;

