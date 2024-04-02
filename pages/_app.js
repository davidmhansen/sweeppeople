import "@/styles/main.scss";

import Layout from "@/components/Layout/Layout";

import { appWithTranslation } from "next-i18next";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(App);
