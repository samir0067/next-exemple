import React from 'react';
import {Layout} from "../src/components/layout";
import axios from "axios";
import {Department} from "../src/utils/types";
import Head from "next/head";

const Departments = ({data}: any) => {
  const styles = {
    padding: 10,
    margin: 10,
    borderBottom: "1px solid #fff",
  }
  return (
    <>
      <Head>
        <title>Liste des départements</title>
      </Head>
      <Layout>
        <>
          {/* TODO Cette page utilise getInitialProps */}
          {data.map((department: Department, index: number) => (
            <div style={styles} key={index}>
              <h1>{department.nom}</h1>
              <div>
                <p>Code département: {department.code}</p>
                <p>Code de la region: {department.codeRegion}</p>
              </div>
            </div>
          ))}
        </>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const url = "https://geo.api.gouv.fr/departements"
  const {data} = await axios.get(url)
  return {
    props: {
      data
    }
  }
}


export default Departments;
