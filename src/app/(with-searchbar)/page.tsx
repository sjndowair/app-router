import style from "./page.module.css";
import AllBooks from "../components/allBooks";
import RandomBooks from "../components/randomBooks";
import { Suspense } from "react";
import BookList from "../components/load/book-list";


export default function Home() {
  return (
    <div className={style.container}>
      <Suspense fallback={<BookList count={3} />}>
     <AllBooks />
     </Suspense>
     <Suspense fallback={<BookList count={10} />}>
      <RandomBooks />
      </Suspense>
    </div>
  );
}
