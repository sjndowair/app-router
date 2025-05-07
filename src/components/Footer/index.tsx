import { getBookData } from "@/api/getBookData"

const Footer = async () => {
   const allBooks = await getBookData("")
   const length = allBooks.length
    return (<footer>
        <div>제작 @winterlood</div>
        <div>{length} books available</div>
    </footer>)

}

export default Footer