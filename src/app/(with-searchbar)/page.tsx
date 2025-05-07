
import BookItem from "@/components/book-item";
import style from "./page.module.css";
import books from "@/mock/books.json";
import { BookData } from "@/types";

export default async function Home() {
 
 const responseBookData = async (data: string) => {
  let API_URL = data ? `${process.env.NEXT_PUBLIC_API_URL}/book/${data}` : `${process.env.NEXT_PUBLIC_API_URL}/book`
  
  try{
    const res = await fetch(API_URL)
    return res.json();
  }catch(e){
    console.error(e)
    return []
  }
  
  
  
 }

  const allBooks = await responseBookData("");
  const randomBooks = await responseBookData("random")

  

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
