"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>

        <ul>
          {[1, 2, 3, 4, 5].map((item, idx) => (
            <li key={idx}>
              <Link href={`/about/?test=${item}`}>링크이동</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
