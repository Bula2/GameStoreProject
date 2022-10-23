import React from 'react';
import Head from "next/head";
import Header from "../components/Header/Header";

interface IMainLayout {
  children: React.ReactNode
}

const MainLayout: React.FC<IMainLayout> = ({children}) => {
  return (
    <>
      <Head>
        <title>{"Games store"}</title>
      </Head>
      <Header/>
      {children}
    </>
  );
};

export default MainLayout;