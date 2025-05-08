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