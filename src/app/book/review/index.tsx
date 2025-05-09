import { createReviewAction } from "@/action";
import { getBookReviewData } from "@/api/getBookData";


const Review = ({bookId}: {
    bookId: string
}) => {
   

    return (<div>
        <form action={createReviewAction}>
            <input readOnly  name="bookId" value={`${bookId}`} hidden />
            <input required type="text" name="content" placeholder="리뷰를 입력해주세요"/>
            <input required type="text" name="author" placeholder="작성자를 입력해주세요"/>
            <button  type={`submit`}>클릭 </button>
        </form>
    </div>)
}

export default Review