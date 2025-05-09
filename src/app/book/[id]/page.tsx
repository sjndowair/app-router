import BookDetail from "../bookDetail";
import Review from "../review";




export default async function Page({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const { id } = await params;
  

  return (
    <>
      <BookDetail bookId={id as string} />
      <Review bookId={id as string} />
    </>
  );
}
