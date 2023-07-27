import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/vapor_bootstrap.min.css";

import { ClerkProvider } from "@clerk/nextjs";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
