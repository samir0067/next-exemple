import React from 'react';
import {Layout} from "../../src/components/layout";
import axios from "axios";
import {Post} from "../../src/utils/types";
import Image from "next/image";
import Head from "next/head";

const Id = ({data}: any) => {
  return (
    <>
      {data &&
        (<>
          <Head>
            <title>{data.title}</title>
          </Head>
          <Layout>
            <>
              <h1>{data.title}</h1>
              <div>
                <Image src={data.pictures[0]} alt={data.title} width={600} height={400}/>
              </div>
              <p>{data.description}</p>
            </>
          </Layout>
        </>)
      }
    </>
  );
};

export const getStaticPaths = async () => {
  const {data} = await axios.get(`https://udemy.fly.dev/api/posts`)
  const posts = data.data
  const paths = posts.map((post: Post) => ({
    params: {id: post._id}
  }))
  return {paths, fallback: true}
}

export const getStaticProps = async ({params}: any) => {
  const id = params.id
  const {data} = await axios.get(`https://udemy.fly.dev/api/post/${id}`)
  return {
    props: {
      data
    }
  }
}

export default Id;
