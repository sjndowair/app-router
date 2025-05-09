import { getBookReviewData } from "@/api/getBookData"
import {IGetBookReviewDataProps} from "@/types"


const ReviewList =  ({isBookReviewData }: {
        isBookReviewData: IGetBookReviewDataProps[]
}) => {
    
    if(!isBookReviewData || isBookReviewData.length === 0) {
        return (<div>아직 리뷰가 존재하지않습니다. <br /> 리뷰를 작성해주세요</div>)
    }
    


    
    return (
        <div>
            <h3>리뷰 목록</h3>
           {
               isBookReviewData.map((review, key) => {
                return(
                    <div key={review?.id} >
                        <h4>{review?.author}</h4>
                        <p>{review?.createAt}</p>
                    <p>{review.content}</p>       
                </div>
                )
               
               })
           }        
        </div>
    )
}

export default ReviewList