"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { debounce } from "lodash";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      if (query) {
        router.push(`list?name=${query}`);
      }
    }, 1000),
    [router]
  );

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInput) {
      debouncedSearch(searchInput);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (value !== searchInput) {
      setSearchInput(value);
      debouncedSearch(value);
    }
  };

  return (
    <form
      className="flex ic justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
        value={searchInput}
        onChange={handleChange}
      />
      <button type="submit" className="cursor-pointer">
        <Image src="/assets/search.png" alt="Search" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;

