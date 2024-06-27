"use client";

import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathName}?${params.toString()}`);
  }, 300);

  return (
    <div
      className="
            flex
            items-center
            justify-between
            gap-1
            mb-5
            w-full
            px-4
            py-2
            border
            border-grey-300
            rounded-md
      "
    >
      <input
        type="text"
        placeholder="Search..."
        className="w-full border-gray-200 text-sm outline-2 rounded-sm px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};

export default Search;
