"use server";

import { sendBookReviewData } from "@/api/getBookData";
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