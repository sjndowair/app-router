"use client"
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { useRouter } from "next/navigation"
import style from "./style.module.css"


const Modal = ({children}: {
    children: React.ReactNode,
}) => {


    const router = useRouter()
    const dialogRef = useRef<HTMLDialogElement>(null)
    useEffect(() => {
        if(!dialogRef?.current?.open){
            dialogRef.current?.showModal()
            dialogRef.current?.scrollTo({
                top: 0,
            })
        }
    }, [])


    return createPortal(
    <dialog
     onClose={() => {
        router.back()
     }}
     onClick={(e) => {
        if(e?.target === e.currentTarget){
            router.back()
        }
    }} className={style.modal} ref={dialogRef}>{children}</dialog>
    , document.querySelector(".modal-root") as HTMLElement)

    
}

export default Modal