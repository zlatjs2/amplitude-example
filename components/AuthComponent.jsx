import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function AuthComponent({ children }) {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    console.log(1);
    setisLoading(true);

    setTimeout(() => {
      setisLoading(false);
    }, 3000);
  }, [router.isReady, router.asPath]);

  if (isLoading) return <div>로딩중....</div>;
  else return <div>{children}</div>;
}

export default AuthComponent;
