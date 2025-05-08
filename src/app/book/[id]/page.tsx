import style from "./page.module.css";
import {getNowBookData} from "@/api/getBookData"
import Image from "next/image";


export const generateStaticParams = () => {
    return [{ id: "1" }, { id: "2" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const { id } = await params;

 const response = await getNowBookData(id as string);

  const { title, subTitle, description, author, publisher, coverImgUrl } = response

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} alt={title} />
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
