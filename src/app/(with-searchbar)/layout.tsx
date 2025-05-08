import { ReactNode } from "react";
import { Suspense } from "react";
import Searchbar from "../../components/searchbar";
import BookList from "../components/load/book-list";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      
      <Suspense fallback={<BookList count={5} />}>
        <Searchbar />
        {children}
      </Suspense>
    </div>
  );
}
