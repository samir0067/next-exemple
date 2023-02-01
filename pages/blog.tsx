import React from 'react';
import {Layout} from "../src/components/layout";
import Link from "next/link";
import axios from "axios";
import {Post} from "../src/utils/types";
import Image from "next/image";
import Head from "next/head";

const Blog = ({posts}: any) => {
  const styles = {
    main: {
      padding: 20,
      margin: 20,
      borderBottom: "2px solid #fff"
    }
  }

  return (
    <>
      <Head>
        <title>Liste des blogs</title>
      </Head>
      <Layout>
        <>
          {/* TODO Cette page utilise getStaticProps */}
          {posts.map((post: Post) => (
            <div key={post._id} style={styles.main}>
              <h1>{post.title}</h1>
              <Link href="/blog/[id]" as={`/blog/${post._id}`} passHref>
                <Image src={post.pictures[0]} alt={post.title} width={200} height={100}/>
              </Link>
              <p>{post.body}</p>
            </div>
          ))}
        </>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const url = "https://udemy.fly.dev"
  const {data} = await axios.get(`${url}/api/posts`)
  const posts = data.data
  return {
    props: {
      posts
    }
  }
}

export default Blog;
