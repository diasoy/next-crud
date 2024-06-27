import React from "react";
import ContactTable from "../components/contact-table";
import Search from "../components/search";
import { CreateButton } from "../components/buttons";

const Contacts = ({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) => {
  const query = searchParams?.query || "";
  const currentPage = parseInt(searchParams?.page as string) || 1;

  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex flex-col items-start justify-between gap-1 mb-5">
        <Search />
        <CreateButton />
      </div>
      <ContactTable query={query} currentPage={currentPage} />
    </div>
  );
};

export default Contacts;
