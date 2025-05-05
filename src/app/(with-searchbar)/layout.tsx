import React from "react";
import SearchBar from "../components/searchBar";
import ClientComponent from "../components/client-component/index";
import ServerComponent from "../components/server-component";
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
