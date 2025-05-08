import BookItem from "@/components/book-item";
import { BookData } from "@/types";
import { getSearchBookData } from "@/api/getBookData";
import delay from "@/util/delay";



// export const dynamic = "error"; 

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {

  await delay(3000);

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
