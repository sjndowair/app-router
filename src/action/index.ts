"use server";

import { sendBookReviewData } from "@/api/getBookData";

export const createReviewAction = async (formData: FormData) => {
  
    const bookId = formData.get("bookId")?.toString() as string
    const content = formData.get("content")?.toString() as string;
    const author = formData.get("author")?.toString() as string
    if(!bookId || !content || !author )  return 
    console.log(content, author)
    await sendBookReviewData({bookId, content, author});
}