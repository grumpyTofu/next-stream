import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import requests from "../utils/requests";

const Home: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> =
  ({ results }) => {
    return (
      <div className="min-h-screen">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Navbar />
        <Results results={results} />
      </div>
    );
  };

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = context.query.genre as string | null;
  const requestObj = genre ? (requests as any)[genre] : requests.fetchTrending;
  const request = await fetch(
    `https://api.themoviedb.org/3${requestObj.url}`
  ).then((res) => res.json());
  return {
    props: {
      results: request.results,
    },
  };
};
