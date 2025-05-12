"use server";

import { sendBookReviewData } from "@/api/getBookData";
import { revalidatePath, revalidateTag } from "next/cache";

export const createReviewAction = async (formData: FormData) => {
  
    try{
        const bookId = formData.get("bookId")?.toString() ; 
    const content = formData.get("content")?.toString() ;
    const author = formData.get("author")?.toString();
    if(!bookId || !content || !author )  return 
    console.log(content, author)
    await sendBookReviewData({bookId, content, author});
    // revalidatePath(`/book/${bookId}`)
    revalidateTag(`review-${bookId}`)
    console.log("리뷰 작성 완료")
    }catch(err){
        console.error(err)
        return;
    }
    
}