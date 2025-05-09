export interface BookData {
  id: number;
  title: string;
  subTitle: string;
  author: string;
  publisher: string;
  description: string;
  coverImgUrl: string;
}


export interface ISendBookReviewDataProps {
  bookId: string;
  content: string;
  author: string

}

export interface IGetBookReviewDataProps {
  id: number;
  content: string;
  author: string;
  createAt:string;
  bookId: number
}


