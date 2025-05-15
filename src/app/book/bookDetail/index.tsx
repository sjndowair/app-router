import style from "../[id]/page.module.css"
import {getNowBookData} from "@/api/getBookData"
import Image from "next/image";


export const dynamicParams = true;


const BookDetail = async ({bookId}: {
    bookId: string
}) => {
    
    const response = await getNowBookData(bookId as string);
   
     const { title, subTitle, description, author, publisher, coverImgUrl } = response
   
     return (
       <div className={style.container}>
         <div
           className={style.cover_img_container}
           style={{ backgroundImage: `url('${coverImgUrl}')` }}
         >
           {/* <img src={coverImgUrl} alt={title} /> */}
           <Image src={coverImgUrl} alt={title} width={240} height={300}></Image>
         </div>
         <div className={style.title}>{title}</div>
         <div className={style.subTitle}>{subTitle}</div>
         <div className={style.author}>
           {author} | {publisher}
         </div>
         <div className={style.description}>{description}</div>
       </div>
     );
}

export default BookDetail