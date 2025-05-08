import BookItem from "@/components/book-item";
import { BookData } from "@/types";
import { getSearchBookData } from "@/api/getBookData";
import delay from "@/util/delay";
import SearchResult from "./searchResult";
import { Suspense } from "react";
import Loading from "./loading";
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
