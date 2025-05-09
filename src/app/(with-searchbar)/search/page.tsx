import SearchResult from "./searchResult";
import { Suspense } from "react";
import BookList from "@/app/components/load/book-list";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {

  const q = (await searchParams).q;

  return (
    <Suspense key={q || ""} fallback={<BookList count={5}/>}>
  <SearchResult q={q || ""} />
  </Suspense>)
}
