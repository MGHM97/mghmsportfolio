import { type AppType } from "next/app";

import "../../styles/globals.css";

import "@/styles/tailwind-styles.css";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const MGHMsPortfolioApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MGHMsPortfolioApp;
