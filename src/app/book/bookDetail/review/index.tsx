


const Review = () => {
   
    const reviewData = (formData: FormData) => {
    "use server" 
    }

    return (<div>
        <form action={reviewData}>
            <input type="text" name="name" placeholder="이름을 입력해주세요"/>
            <input type="text" name="id" placeholder="아이디를 입력해주세요"/>
            <button type={`submit`}>클릭 </button>
        </form>
    </div>)
}

export default Review