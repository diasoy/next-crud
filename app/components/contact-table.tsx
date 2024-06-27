import React from "react";
import { getContacts } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { DeleteButton, EditButton } from "./buttons";

const ContactTable = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const contacts = await getContacts(query, currentPage);

  return (
    <table className="w-full text-sm text-left text-grey-500">
      <thead
        className="
                text-xs
                font-semibold
                tracking-wide
                text-left
                border-b
                border-grey-300
                bg-grey-100
            "
      >
        <tr>
          <th className="px-4 py-3">#</th>
          <th className="px-4 py-3">Name</th>
          <th className="px-4 py-3">Phone</th>
          <th className="px-4 py-3">Created At</th>
          <th className="px-4 py-3 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={contact.id}>
            <td className="px-4 py-3">{index + 1}</td>
            <td className="px-4 py-3">{contact.name}</td>
            <td className="px-4 py-3">{contact.phone}</td>
            <td className="px-4 py-3">
              {formatDate(contact.createdAt.toString())}
            </td>
            <td className="px-4 py-3 text-center flex gap-2">
              <EditButton id={contact.id} />
              <DeleteButton id={contact.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
