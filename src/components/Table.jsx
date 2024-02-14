import React from 'react';
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

const Table = ({ data, columns, onEdit, onDelete }) => {
  return (
    <div className="flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.key}
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-600 sm:pl-6"
                    >
                      {column.header}
                    </th>
                  ))}
                  <th
                    scope="col"
                    className=" text-center text-sm font-semibold text-gray-600"
                  >Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data.map((row) => (
                  <tr key={row.id}>
                    {columns.map((column) => (
                      <td
                        key={column.key}
                        className="py-3.5 pl-4 pr-3 text-left text-sm text-gray-600 sm:pl-6"

                      >
                        {row[column.key]}
                      </td>
                    ))}
                    <td className="flex  justify-center relative whitespace-nowrap py-4 text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-gray-600 hover:text-primary-600 mr-2"
                        onClick={(e) => {
                          e.preventDefault();
                          onEdit(row);
                        }}
                      >
                        <PencilSquareIcon className="w-5 h-5" />
                        <span className="sr-only">Editar</span>
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-red-600"
                        onClick={(e) => {
                          e.preventDefault();
                          onDelete(row);
                        }}
                      >
                        <TrashIcon className="w-5 h-5" />
                        <span className="sr-only">Eliminar</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
