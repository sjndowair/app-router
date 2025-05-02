import React from "react";
import SearchBar from "./searchBar";

const SearchLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
};

export default SearchLayout;
