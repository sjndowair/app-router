import style from "./style.module.css";


const BookSkeleton = () =>{

    return (<div className={style.container}>
      <div className={style.image}></div>
      <div className={style.box}>
      <div className={style.explanation}></div>
      <div className={style.author}></div>
      </div>
    </div>)
}


export default BookSkeleton