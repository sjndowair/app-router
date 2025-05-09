import BookDetail from "../bookDetail";
import Review from "../review";
import ReviewList from "../reviewList";
import { getBookReviewData } from "@/api/getBookData";



export default async function Page({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const { id } = await params;
  const isBookReviewData = await getBookReviewData(id as string)
  

  
  

  return (
    <>
      <BookDetail bookId={id as string} />
      <Review bookId={id as string} />
      <ReviewList isBookReviewData={isBookReviewData}  />
    </>
  );
}
