"use server";

import { sendBookReviewData, deleteReivewData } from "@/api/getBookData";
import { revalidatePath, revalidateTag } from "next/cache";


export const createReviewAction = async (state: any ,formData: FormData) => {
    const bookId  = formData.get("bookId")?.toString() ; 
    const content = formData.get("content")?.toString() ;
    const author = formData.get("author")?.toString();
    if(!bookId || !content || !author )  {
        return  {
            status: false,
            error: "리뷰 내용과 작성자를 입력해주세요"
        }
    }
    try{
    console.log(content, author)
    
    await sendBookReviewData({bookId, content, author});
    revalidateTag(`review-${bookId}`)
    return {
        status: true,
        message: "리뷰 작성 완료"
    }
    // revalidatePath(`/book/${bookId}`)
    
    // console.log("리뷰 작성 완료")
    }catch(err){
        return  {
            status: false, 
            error: `리뷰 저장에 실패했습니다: ${err}`
        }
    }
    
}

export const deleteReviewAction = async (state: any, formData: FormData) => {
    const reviewId = formData.get("reviewId")?.toString();
    const bookId = formData.get("bookId")?.toString();
    if(!reviewId){
        return {
            status: false,
            error: "리뷰 아이디가 존재하지 않습니다."
        }
    }
try{
    await deleteReivewData(reviewId, bookId as string);
    console.log("리뷰 삭제 완료")
    revalidateTag(`review-${bookId}`)
    return {
        status: true,
        message: "리뷰 삭제 완료"
    }
}catch(err){
    return {
        status: false,
        error: `리뷰 데이터를 정상적으로 삭제하지 못하였습니다. ${err}`
    }
}

}