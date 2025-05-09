import { sendBookReviewData } from "@/api/getBookData"



const Review = ({bookId}: {
    bookId: string
}) => {
   
const createReviewAction = async (formData: FormData) => {
    'use server'
    const content = formData.get("content")?.toString() as string;
    const author = formData.get("author")?.toString() as string
    console.log(content, author)
    await sendBookReviewData({bookId, content, author});
}

    return (<div>
        <form action={createReviewAction}>
            <input hidden name={`${bookId}`} />
            <input required type="text" name="content" placeholder="리뷰를 입력해주세요"/>
            <input required type="text" name="author" placeholder="작성자를 입력해주세요"/>
            <button  type={`submit`}>클릭 </button>
        </form>
    </div>)
}

export default Review