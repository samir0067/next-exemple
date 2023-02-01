import React from 'react';
import {Layout} from "../../src/components/layout";
import Head from "next/head";
import dynamic from "next/dynamic";

const IsItems = dynamic(
  () => import("../../src/components/isItems").then(item => item.IsItems),
  {ssr: false}
)

const Items = () => {


  return (
    <>
      <Head>
        <title>Items</title>
      </Head>
      <Layout>
        <IsItems/>
      </Layout>
    </>

  );
};

export default Items;
