"use client";

import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import { deleteContact } from "@/lib/action";

export const CreateButton = () => {
  return (
    <Link
      href="/contacts/create"
      className="flex gap-2 items-center bg-indigo-700 px-3 py-2 text-white rounded"
    >
      <FaPlus size={12} />
      Create
    </Link>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/contacts/edit/${id}`}
      className="flex gap-2 items-center bg-yellow-500 px-3 py-2 text-white rounded"
    >
      <CiEdit size={20} />
    </Link>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const DeleteContactWithId = deleteContact.bind(null, id);

  return (
    <form action={DeleteContactWithId}>
      <button className="flex gap-2 items-center bg-red-500 px-3 py-2 text-white rounded">
        <MdDeleteForever size={20} />
      </button>
    </form>
  );
};

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  const className = clsx(
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
    {
      "bg-gray-400": pending,
      "cursor-not-allowed": pending,
    }
  );

  return (
    <button type="submit" className={className} disabled={pending}>
      {label == "save" ? (
        <span>{pending ? "Saving..." : "Save"}</span>
      ) : (
        <span>{pending ? "Updating..." : "Update"}</span>
      )}
    </button>
  );
};
