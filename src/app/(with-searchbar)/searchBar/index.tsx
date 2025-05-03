"use client";

import { useState, useEffect } from "react";

const SearchBar = () => {
  const [value, setValue] = useState<string>("");
  console.log(value);

  //   const onClickSearch = (e: React.) => {

  //   }

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <>
      <input value={value} onChange={onChangeValue} type={`text`} />{" "}
      <button type="button">검색</button>
    </>
  );
};

export default SearchBar;
