import { AppProps } from "next/app";
import { FC } from "react";
import { wrapper } from "../../store";

const wrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(wrappedApp);