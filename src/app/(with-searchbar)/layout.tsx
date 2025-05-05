import React from "react";
import SearchBar from "./searchBar";
import ClientComponent from "./\bclient-component";
import ServerComponent from "./server-component";
const SearchLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
      <SearchBar />
      {children}
    </div>
  );
};

export default SearchLayout;
