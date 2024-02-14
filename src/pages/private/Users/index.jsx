import React from "react";
import PrivateLayout from "@/layout/PrivateLayout";
import Table from "@/components/Table";

const columns = [
    { header: 'Name', key: 'name' },
    { header: 'Title', key: 'title' },
    { header: 'Email', key: 'email' },
    { header: 'Role', key: 'role' }
  ];
  
  const people = [
    {id: 1, name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    {id: 2, name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    {id: 3, name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    {id: 4, name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    {id: 5, name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    {id: 6, name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    {id: 7, name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
  ];
  
  const handleEdit = (row) => {
    // Handle edit action
  };
  
  const handleDelete = (row) => {
    // Handle delete action
  };
  

const Users = () => {
  return (
    <PrivateLayout title={"Users"} actionButton={() => console.log("hola")}>
      <Table data={people} columns={columns} onEdit={handleEdit} onDelete={handleDelete} />
    </PrivateLayout>
  );
};

export default Users;
