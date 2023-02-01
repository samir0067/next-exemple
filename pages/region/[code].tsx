import React from 'react';
import axios from "axios";
import Head from "next/head";
import {Layout} from "../../src/components/layout";

const Code = ({data}: any) => {
  return (
    <>
      {data &&
        (<>
          <Head>
            <title>{data.nom}</title>
          </Head>
          <Layout>
            <>
              <h1>Region: {data.nom}</h1>
              <p>Code: {data.code}</p>
            </>
          </Layout>
        </>)
      }
    </>
  );
};

export const getServerSideProps = async ({params}: any) => {
  const code = params.code
  const url = "https://geo.api.gouv.fr"
  const {data} = await axios.get(`${url}/regions/${code}`)

  return {
    props: {
      data
    }
  }
}

export default Code;
