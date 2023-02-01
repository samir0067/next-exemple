import Head from 'next/head'
import {Layout} from "../src/components/layout";
import axios from "axios";
import Link from "next/link";

const Home = ({data}: any) => {
  const styles = {
    margin: 10,
    padding: 10,
    borderBottom: "1px solid #DDD",
  }

  return (
    <>
      <Head>
        <title>Liste des régions</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Layout>
        <>
          {/* TODO Cette page utilise getServerSideProps */}
          {data.map((region: any) => (
              <div key={region.code} style={styles}>
                <Link href="region/[code]" as={`/region/${region.code}`} passHref>
                  <h1>{region.nom}</h1>
                </Link>
                <p>{region.code}</p>
              </div>
            )
          )}
        </>
      </Layout>
    </>
  )
}

export const getServerSideProps = async () => {
  const {data} = await axios.get(`${process.env.API_GEO}/regions`)
  return {props: {data}}
}

export default Home
