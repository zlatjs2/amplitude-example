import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
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
