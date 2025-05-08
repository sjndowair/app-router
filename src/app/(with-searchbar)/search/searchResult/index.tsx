import BookItem from "@/components/book-item";
import delay from "@/util/delay";
import { BookData } from "@/types";
import { getSearchBookData } from "@/api/getBookData";

const SearchResult = async ({q}: {q: string}) => {
    await delay(1000);

   
   const booksData =  await getSearchBookData(q || "");
  
    return (
      <div>
        {booksData.map((book: BookData) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    );
}

export default SearchResult