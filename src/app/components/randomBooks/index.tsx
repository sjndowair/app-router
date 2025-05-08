
import BookItem from "@/components/book-item";
import {getBookData} from "@/api/getBookData"
import { BookData } from "@/types";
import delay from "@/util/delay";



export default async function RandomBooks() {
 
  await delay(1500)
  
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
