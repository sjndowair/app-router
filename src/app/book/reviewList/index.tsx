'use client'

import style from "./style.module.css"
import { useEffect , useState} from "react"
import {IGetBookReviewDataProps} from "@/types"


const ReviewList =  ({isBookReviewData }: {
        isBookReviewData: IGetBookReviewDataProps[]
}) => {

    const [isCreateAt, setIsCreateAt] = useState(isBookReviewData[0]?.createAt);
    console.log(new Date(isCreateAt).toDateString() || "날짜없음")
     
    
    
    if(!isBookReviewData || isBookReviewData.length === 0) {
        return (<div>아직 리뷰가 존재하지않습니다. <br /> 리뷰를 작성해주세요</div>)
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
                        <p className={style.reviewDate}>{new Date(review?.createAt).toLocaleString()}</p>
                
                </div>
                )
               
               })
           }        
        </div>
    )
}

export default ReviewList