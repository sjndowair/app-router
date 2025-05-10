import { ReactNode, Suspense } from "react";
import Searchbar from "../../components/searchbar"
import BookSkeleton from "../components/load/book-skeleton";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Suspense fallback={<BookSkeleton />}>
        <Searchbar /> 
        {children}
        </Suspense>
    </div>
  );
}
