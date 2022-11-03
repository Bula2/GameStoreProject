import React from 'react';
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

interface IMainLayout {
  children: React.ReactNode
}

const MainLayout: React.FC<IMainLayout> = ({children}) => {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#2d89ef"/>
        <meta name="theme-color" content="#ffffff"/>
        <title>{"GamesNovel"}</title>
      </Head>
      <Header/>
      {children}
      <Footer/>
    </>
  );
};

export default MainLayout;