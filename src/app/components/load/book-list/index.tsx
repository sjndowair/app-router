import BookSkeleton from "../book-skeleton"


const BookList = ({count}: {count: number}) => {
    return new Array(count).fill(0).map((_, i) => (<BookSkeleton key={i} />))
}

export default BookList