
import BookItem from "@/components/book-item";
import style from "./page.module.css";
import {getBookData} from "@/api/getBookData"
import { BookData } from "@/types";

export default async function Home() {
 

  const allBooks = await getBookData("");
  const randomBooks = await getBookData("random")

  

  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {randomBooks.map((book: BookData) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book: BookData) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}
