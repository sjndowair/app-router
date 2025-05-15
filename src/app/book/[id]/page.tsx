import { BookData } from "@/types";
import BookDetail from "../bookDetail";
import Review from "../review";
import ReviewList from "../reviewList";
import { getBookReviewData, getNowBookData } from "@/api/getBookData";


export const generateStaticParams = async () => {
  return [{ id: "1" }, { id: "2" }];
}



export const generateMetadata = async ({params}: {
  params: Promise<{id: string}>
}) => {
  const { id } = await params
  const res = await getNowBookData(id)
  const { title, author, coverImgUrl, description, publisher, subTitle }: BookData = res
  
  return {
    title: `${title}의 리뷰    `,
    description: `${title}의 리뷰입니다.`,
    openGraph: {
      title: `${title}의 리뷰`,
      description: `${title}의 리뷰입니다.`,
      
  }
  
 
}

  
}


export default async function Page({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const { id } = await params ;

  
  
  const isBookReviewData = await getBookReviewData(id as string)
  
  if (!isBookReviewData) return <div>리뷰 데이터를 불러오는 데 실패했습니다...</div>

  
  

  return (
    <>
      <BookDetail bookId={id as string} />
      <div style={{marginTop: "3rem"}} >
      <Review bookId={id as string} />
      <ReviewList isBookReviewData={isBookReviewData}  />
      </div>
    </>
  );
}
