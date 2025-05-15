import style from "./page.module.css";
import AllBooks from "../components/allBooks";
import RandomBooks from "../components/randomBooks";
import { Suspense } from "react";
import BookList from "../components/load/book-list";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "한입 북스",
  description: "한입 북스에 등록 된 도서를 만나보세요.",
  openGraph: {
    title: "한입 북스",
    description: "한입 북스에 등록 된 도서를 만나보세요.",
    images: ["/thumbnail.png"]
  }
}

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
