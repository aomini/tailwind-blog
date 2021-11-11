import Head from "next/head";

import Intro from "../src/components/Intro";
import Content from "../src/components/Content";
import HomePage from "../src/components/HomePage"
import Course from "../src/components/Course";
import Blogs from "../src/components/Blogs";

import JoinMe from "../src/components/JoinMe";
import PosterLast from "../src/components/PosterLast";
import Footer from "../src/components/Footer";




export default function Home() {

  return (
    <>
      <Head>
        <title>New App With dark mode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
      <Intro />
      <Content />
      <Blogs />
      <Course />
      <JoinMe />
      <PosterLast />
      <Footer />


    </>


  )
}
