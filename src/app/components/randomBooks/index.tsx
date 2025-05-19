
import BookItem from "@/components/book-item";
import {getBookData} from "@/api/getBookData"
import { BookData } from "@/types";




export default async function RandomBooks() {
 
  
  
  const randomBooks = await getBookData("random")

  

  return (
      <section>
        <h3>지금 추천하는 도서</h3>
        {randomBooks.map((book: BookData) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
  );
}
