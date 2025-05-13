import { ISendBookReviewDataProps } from "@/types"

export const getBookData = async (data: string) => {
    const API_URL = data ? `${process.env.NEXT_PUBLIC_API_URL}/book/${data}` : `${process.env.NEXT_PUBLIC_API_URL}/book`
    try{
        if(data){
            const res = await fetch(API_URL, {next: {revalidate: 3}})    
            return res.json()
        } else if(data === ""){
            const res =await fetch(API_URL, {cache: "force-cache"})
            return res.json()
        }
        
      }catch(e){
        console.error(e)
        return []
      }
}


export const getSearchBookData = async (id: string) => {
    
   const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/book/search?q=${id}`
   try{
    const res = await fetch(API_URL, {cache: "force-cache"})
    if(!res.ok) throw new Error("에러 발생")
    return res.json()
   }catch(e){
    console.error(e)
    return []
   }
}

export const getNowBookData = async (bookId: string) => {
    const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/book/${bookId}`
    try{
        const res = await fetch(API_URL)
        if(!res.ok) throw new Error("에러발생")
        return res.json()
    }catch(e){
        console.error(e)
        return []
    }
}
   
    

export const sendBookReviewData = async ({bookId, content, author}: ISendBookReviewDataProps) => {
    const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/review`
    try{
        const res = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({bookId, content, author})
        })
        if(!res.ok){
            throw new Error(res.statusText)
        } 
       console.log(res?.status)
    }catch(err){
        console.error(err)
        return;
    }

}

export const getBookReviewData = async (bookId: string) => {
    const API_URL  = `${process.env.NEXT_PUBLIC_API_URL}/review/book/${bookId}`
    try{
        const res = await fetch(API_URL, {next: {tags: [`review-${bookId}`]}})
        
        console.log(res.status)
        return res.json()
    }catch(err){
        console.error(err)
        return []
    }


}

export const deleteReivewData = async (reviewId: string, bookId: string ) => {
    const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/review/${reviewId}`
    try{
        const res = await fetch(API_URL, {
            method: "DELETE",
        })
        if(!res.ok) throw new Error(res.statusText);
            return {
                status: true,
                message: "리뷰삭제완료"
            }
            //delete매서드 사용 시에는 return res.json()를 사용하지 않아도됨 사용시 오류 발생
        
    }catch(err){
        console.error(err)
        return []
    }
}