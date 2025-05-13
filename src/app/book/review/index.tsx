"use client"

import { createReviewAction } from "@/action";
import style from "./style.module.css"
import { useActionState, useEffect } from "react";


const Review = ({bookId}: {
    bookId: string
}) => {
   
    const [state, formAction, isPending] = useActionState(
        createReviewAction,
        null)

        useEffect(() => {
            if(state && !state.status){
                alert(state.error)
            }
        },[state])


     console.log(state)

    return (<div>
        <form action={formAction}>
            <input readOnly  name="bookId" value={`${bookId}`} hidden />
            <textarea disabled={isPending} className={style.reviewTextarea} required  name="content" placeholder="리뷰를 입력해주세요"/>
            <div className={style.reviewContainer}>
            <input disabled={isPending} className={style.reviewInput} required type="text" name="author" placeholder="작성자를 입력해주세요"/>
            <button disabled={isPending} className={style.reviewButton} type={`submit`}>{isPending ? "저장중" : "클릭"} </button>
            </div>
        </form>
    </div>)
}
 
export default Review