import { ReactNode } from "react"
import Link from "next/link"


const Layout = ({children, sidebar, feed}: {
    children: ReactNode,
    feed: ReactNode,
    sidebar: ReactNode
}) => {
    return (
        <>
        <div>
            <Link href={`/parllel`}>parllel</Link>
            <br />
        <Link href={`/parllel/setting`}>Settings</Link>
        </div>
            <div>{sidebar}</div>
            <div>{children}</div>
            <div>{feed}</div>
            
        </>
    )
}

export default Layout;