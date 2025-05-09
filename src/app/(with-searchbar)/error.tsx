"use client";

import { startTransition, useEffect } from "react";
import { useRouter } from "next/navigation";


const Error = ( {error, reset}: {
  error: Error;
  reset: () => void
}) => {

  const router = useRouter()

  const isOnClickClearError = () => {
    startTransition(() => {
      router.refresh()
      reset()
    })
     
  }


  useEffect(() => {
    console.error(error.message);
  },[error])
 
  return (<>
    <div>에러가 발생 하였습니다.</div>
    <button onClick={() => {isOnClickClearError}} type={"button"}>오류 해결</button>
    </>
  )
}

export default Error


