import Link from "next/link";

export default function Home() {
  return (
    <>
      {[1, 2, 3, 4, 5].map((item, idx) => (
        <Link href={`/about/?test=${item}`} key={idx}>
          링크이동 - {item}
        </Link>
      ))}
    </>
  );
}
