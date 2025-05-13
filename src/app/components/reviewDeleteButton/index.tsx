"use client"
import { deleteReviewAction } from "@/action"
import { useEffect,useActionState, useRef, useState } from "react"


const ReviewDeleteButton = ({reviewId, bookId}: {reviewId: string | number, bookId: string | number}) => {
    
   

    const [state, formAction, isPending] = useActionState(deleteReviewAction, null)
    const formRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        if(state && !state?.status){
            alert(state.error)
        }
    }, [state])
    return (
        <form ref={formRef} action={formAction}>
            <input name="reviewId" value={reviewId} hidden readOnly />
            <input name="bookId" value={bookId} hidden readOnly />
            {/* submit매서드는 유효성 검사나 이벤트 핸들러 를 전부 무시하고 제출해버리기 때문에 의도한대로 동작하는 requestSubmit사용하는것을 권장 */}
    <div onClick={() => {formRef.current?.requestSubmit()}}>{isPending ? "..." : "삭제하기"}</div>
    </form>)
}
 
export default ReviewDeleteButton