"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  console.log("리로드");
  return <div className={styles.page}>인덱스 페이지</div>;
}
