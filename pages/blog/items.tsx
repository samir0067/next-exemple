import React from 'react';
import {Layout} from "../../src/components/layout";
import Head from "next/head";

const Items = () => {
  return (
    <>
      <Head>
        <title>Items</title>
      </Head>
      <Layout>
        <h1>Bienvenue sur notre site web</h1>
        <p>{"Nous sommes heureux de vous accueillir sur notre site web dédié à l'information et à l'entrainement."}</p>
        <ul>
          <li>Actualités</li>
          <li>Sport</li>
          <li>Culture</li>
          <li>Voyage</li>
        </ul>
        <ol>
          <li>Introduction</li>
          <li>Notre histoire</li>
          <li>Notre mission</li>
          <li>Nos valeurs</li>
        </ol>
        <blockquote>
          {"Le savoir est la clé du succès."}
        </blockquote>
      </Layout>
    </>

  );
};

export default Items;
