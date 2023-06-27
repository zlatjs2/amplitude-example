import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      {[1, 2, 3, 4, 5].map((item, idx) => (
        <Link
          href={`https://amplitude-example-hdo3vq1by-fe-develop.vercel.app/about/?test=${item}`}
          key={idx}
        >
          링크이동 - {item}
        </Link>
      ))}

      <br />
      <br />
      <br />
      <br />
      <br />
      {[1, 2, 3, 4, 5].map((item, idx) => (
        <button
          type="button"
          onClick={() =>
            router.push({ pathname: "/about", query: { test: item } })
          }
          key={idx}
        >
          버튼링크 이동{item}
        </button>
      ))}
    </>
  );
}
