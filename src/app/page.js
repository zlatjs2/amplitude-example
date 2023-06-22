"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>

        <Link href="/about/?test=11111">링크이동</Link>
      </div>
    </main>
  );
}
