"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [value, setValue] = useState<string>("");

  const router = useRouter();
  console.log(router);

  const onClickSearch = () => {
    router.push(`/search?q=${value}`);
  };

  const onKeyDownSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickSearch();
    }
  };

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <>
      <input
        onKeyDown={onKeyDownSearch}
        value={value}
        onChange={onChangeValue}
        type={`text`}
      />{" "}
      <button onClick={onClickSearch} type="submit">
        검색
      </button>
    </>
  );
};

export default SearchBar;
