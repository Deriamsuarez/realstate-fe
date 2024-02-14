import React, { useState } from "react";
import PrivateLayout from "@/layout/PrivateLayout";
import Table from "@/components/Table";
import { Transition } from "@headlessui/react";
import Form from "./template/Form";

const columns = [
  { header: "Name", key: "name" },
  { header: "Title", key: "title" },
  { header: "Email", key: "email" },
  { header: "Role", key: "role" },
];

const people = [
  {
    id: 1,
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    id: 2,
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    id: 3,
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    id: 4,
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    id: 5,
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    id: 6,
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    id: 7,
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

const handleEdit = (row) => {
  // Handle edit action
};

const handleDelete = (row) => {
  // Handle delete action
};

const Properties = () => {
  const [isShowing, setIsShowing] = useState(true);
  const [isShowingForm, setisShowingForm] = useState(false);

  const handleForm = () => {
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
    <PrivateLayout title={"Properties"} actionButton={handleForm}>
      <Transition
        show={isShowing}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Table
          data={people}
          columns={columns}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
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
        <Form />
      </Transition>
    </PrivateLayout>
  );
};

export default Properties;
