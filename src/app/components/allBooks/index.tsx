
import BookItem from "@/components/book-item";
import {getBookData} from "@/api/getBookData"
import { BookData } from "@/types";
import delay from "@/util/delay";



export default async function AllBooks() {

  try{
    await delay(500) 
  const allBooks = await getBookData("");
  return (
    <section>
      <h3>등록된 모든 도서</h3>
      {allBooks.map((book: BookData) => (
        <BookItem key={book.id} {...book} />
      ))}
    </section>  
);
  }catch(e){
    console.error(e)
    return <div>Error</div>
  }
    



}
