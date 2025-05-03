import React from "react";
import SearchBar from "./searchBar";
import ClientComponent from "./\bclient-component";
const SearchLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <ClientComponent />
      <SearchBar />
      {children}
    </div>
  );
};

export default SearchLayout;
