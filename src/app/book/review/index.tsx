import { createReviewAction } from "@/action";
import style from "./style.module.css"


const Review = ({bookId}: {
    bookId: string
}) => {
   

    return (<div>
        <form action={createReviewAction}>
            <input readOnly  name="bookId" value={`${bookId}`} hidden />
            
            <textarea className={style.reviewTextarea} required  name="content" placeholder="리뷰를 입력해주세요"/>
            <div className={style.reviewContainer}>
            <input className={style.reviewInput} required type="text" name="author" placeholder="작성자를 입력해주세요"/>
            <button className={style.reviewButton} type={`submit`}>클릭 </button>
            </div>
        </form>
    </div>)
}

export default Review