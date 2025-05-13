"use client"
import style from "./style.module.css"
import ReviewDeleteButton from "@/app/components/reviewDeleteButton"
import {IGetBookReviewDataProps} from "@/types"


const ReviewList =  ({isBookReviewData }: {
        isBookReviewData: IGetBookReviewDataProps[]
}) => {

    const reviewDate = (data: string | undefined) => {
        return data ? new Date(data).toLocaleDateString() : "";
    }

      
    return (
        <div className={style.reviewContainer}>
            <h3 className={style.reviewTitle}>리뷰 목록</h3>
           {
               isBookReviewData.map((review, key) => {
                return(
                    <div className={style.reviewBox} key={review?.id} >
                        <h4>{review?.author}</h4>
                        <p>{review.content}</p>       
                        <br />
                        <div className={style.flex}>
                        <p className={style.reviewDate}>{reviewDate(review?.createdAt)}</p>
                        <div><ReviewDeleteButton bookId={review.bookId} reviewId={review.id} /></div>
                        </div>
                </div>
                )
               
               })
           }        
        </div>
    )
}

export default ReviewList