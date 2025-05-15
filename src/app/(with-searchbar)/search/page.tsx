import SearchResult from "./searchResult";
import { Suspense } from "react";
import BookList from "@/app/components/load/book-list";
import { title } from "process";


export const generateMetadata = async ({
  searchParams,
}: {
  searchParams: Promise<{q?: string}>
  }
) => { 
  const {q} = await searchParams;
   return {
    title: `한입북스 - 검색 결과: ${q}`,
    description: `한입북스에서 ${q}에 대한 검색 결과를 확인하세요.`,
    openGraph: {
      title: `한입북스 - 검색 결과: ${q}`,
      description: `한입북스에서 ${q}에 대한 검색 결과를 확인하세요.`,
      images: ["/thumbnail.png"],
    },
    
   }
  }

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
