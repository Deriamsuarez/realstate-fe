import React from "react";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import { useCategories } from "@/connection/property";
import TextareaField from "@/components/TextareaField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { number, object, string } from "yup";
import { useCreateProperty } from "@/connection/property";

const apartmentOptions = [
  { value: "studio", label: "Studio" },
  { value: "penthouse", label: "Penthouse" },
  { value: "loft", label: "Loft" },
  { value: "duplex", label: "Duplex" },
  { value: "townhouse", label: "Townhouse" },
  { value: "condo", label: "Condo" },
  { value: "apartmentBuilding", label: "Apartment Building" },
  { value: "flat", label: "Flat" },
  { value: "efficiency", label: "Efficiency" },
  { value: "gardenApartment", label: "Garden Apartment" },
  { value: "basementApartment", label: "Basement Apartment" },
  { value: "co-op", label: "Co-op" },
  { value: "servicedApartment", label: "Serviced Apartment" },
  { value: "microApartment", label: "Micro Apartment" },
];

const amounts = [
  { id: "1", name: 1 },
  { id: "2", name: 2 },
  { id: "3", name: 3 },
  { id: "4", name: 4 },
  { id: "5", name: 5 },
  { id: "6", name: 6 },
];

const schema = object().shape({
  name: string().required("Title is required"),
  price: number()
    .required("Price is required")
    .positive("Price must be positive"),
  categoryId: string().required("Category is required"),
  rooms: number()
    .required("Rooms amount is required")
    .positive("Rooms amount must be positive"),
  parks: number()
    .required("Parks amount is required")
    .positive("Parks amount must be positive"),
  bathroom: number()
    .required("Bathrooms amount is required")
    .positive("Bathrooms amount must be positive"),
  description: string().required("Description is required"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Resolver de yup para react-hook-form
  });

  const { mutate } = useCreateProperty();

  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);

    data.categoryId = parseInt(data.categoryId);

    mutate(
      { ...data },
      {
        onSuccess: (data) => {
          console.log(data);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  console.log(errors);

  const categories = useCategories();

  return (
    <div className="grid grid-cols-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="col-span-full md:col-span-8 grid grid-cols-12 gap-4"
      >
        <InputField
          name={"name"}
          label={"Title"}
          placeholder={"Apartamento en Bella Vista"}
          className={"col-span-6 sm:col-span-4"}
          register={register}
        />
        <InputField
          name={"price"}
          label={"Price"}
          placeholder={"12,500"}
          className={"col-span-6 sm:col-span-4"}
          register={register}
          type="number"
        />
        <SelectField
          name={"categoryId"}
          label={"Categories"}
          placeholder={"Apartamento"}
          className={"col-span-full sm:col-span-4"}
          options={categories?.data}
          defaultValue={apartmentOptions[0]}
          register={register}
        />

        <SelectField
          name={"rooms"}
          label={"Rooms amount"}
          placeholder={"Monto"}
          className={"col-span-full sm:col-span-4"}
          options={amounts}
          defaultValue={amounts[0]}
          register={register}
        />

        <SelectField
          name={"parks"}
          label={"Parks amount"}
          placeholder={"Monto"}
          className={"col-span-full sm:col-span-4"}
          options={amounts}
          defaultValue={amounts[0]}
          register={register}
        />
        <SelectField
          name={"bathroom"}
          label={"Bathrooms"}
          placeholder={"Monto"}
          className={"col-span-full sm:col-span-4"}
          options={amounts}
          defaultValue={amounts[0]}
          register={register}
        />
        <TextareaField
          name={"description"}
          label={"Description"}
          placeholder={"aquí va la descripción"}
          className={"col-span-full"}
          register={register}
        />
        <button type="submit">hola</button>
      </form>
    </div>
  );
};

export default Form;
