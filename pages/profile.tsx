import React from 'react';
import {Layout} from "../src/components/layout";
import Link from "next/link";
import {useRouter} from "next/router";
import axios from "axios";
import useSWR from "swr";
import Head from "next/head";

const Profile = () => {
  const router = useRouter()
  const fetcher = (url: any) => axios.get(url).then(response => response.data)
  const {data, error, isLoading} = useSWR("https://jsonplaceholder.typicode.com/users", fetcher)
  const styles = {
    user: {
      padding: 10,
      margin: 10,
      borderBottom: "1px solid #fff",
    },
    loading: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      aligneItem: "center"
    }
  }

  if (!data || isLoading) return <div style={styles.loading}><h1>Chargement...</h1></div>
  if (error) return <div style={styles.loading}><h1>Une erreur est survenue</h1></div>

  return (
    <>
      <Head>
        <title>Liste des utilisateurs</title>
      </Head>
      <Layout>
        <>
          {/* TODO Cette page utilise le rendu coté client */}
          <h1>Profile</h1>
          <ul>
            <NameLink name="John Doe"/>
            <NameLink name="Sam Array"/>
            <NameLink name="Bill Dogs"/>
          </ul>
          <h1>{router.query.name}</h1>
          <br/>
          <br/>
          {data && data.map((user: any) => (
            <div style={styles.user} key={user.id}>
              <h1>{user.email}</h1>
              <div>
                <p>Email : {user.email}</p>
                <p>Phone : {user.phone}</p>
              </div>
            </div>
          ))}
        </>
      </Layout>
    </>
  );
};


const NameLink = ({name}: any) => (
  <li>
    <Link href={`/profile?title=${name}`}>{name}</Link>
  </li>
)

export default Profile;
