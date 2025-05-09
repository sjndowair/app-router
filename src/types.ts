export interface BookData {
  id: number;
  title: string;
  subTitle: string;
  author: string;
  publisher: string;
  description: string;
  coverImgUrl: string;
}


export interface ISendBokkReviewDataProps {
  bookId: string;
  content: string;
  author: string

}