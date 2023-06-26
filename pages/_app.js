import "@/styles/globals.css";

import { RecoilRoot } from "recoil";
// import Auth from "@/components/init/Auth";
// import Analytics from "@/components/init/Analytics";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0, // API 요청 실패시 재시도 하는 옵션 (설정값 만큼 재시도)
    },
  },
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        {/* <Auth> */}
        <Component {...pageProps} />
        <div id="modal-root"></div>
        {/* </Auth> */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
