import { ReactNode } from "react";
import { Suspense } from "react";
import Searchbar from "../../components/searchbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>{new Date().toLocaleTimeString()}</div>
      <Suspense fallback={<div>검색창 로딩 중....</div>}>
        <Searchbar />
        {children}
      </Suspense>
    </div>
  );
}
