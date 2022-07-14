// libs
import React from "react";
// layouts
import Header from "@/layouts/Header";
import PageContainer from "@/layouts/PageContainer";
// others
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Header />
    <PageContainer>
      <Component {...pageProps} />
    </PageContainer>
  </>
);

export default MyApp;
