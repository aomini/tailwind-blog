import Head from "next/head";
import Homepage from "../src/components/Homepage";
import SectionA from "../src/components/SectionA";
import SectionB from "../src/components/SectionB";



export default function Home() {

  return (
    <>
      <Head>
        <title>New App With dark mode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
      <SectionA />
      <SectionB />

    </>


  )
}
