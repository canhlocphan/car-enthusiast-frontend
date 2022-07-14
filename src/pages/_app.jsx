// libs
import React from "react";
// layouts
import Header from "@/layouts/Header";
// others
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Header />
    <Component {...pageProps} />
  </>
);

export default MyApp;
