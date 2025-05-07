import BookItem from "@/components/book-item";
import { BookData } from "@/types";
import { getSearchBookData } from "@/api/getBookData";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {

  const q = (await searchParams).q
 
 const booksData =  await getSearchBookData(q || "");

  return (
    <div>
      {booksData.map((book: BookData) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
