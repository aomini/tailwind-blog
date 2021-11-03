import { useEffect, useState } from "react";
import Head from "next/head";
import { useTheme } from "next-themes";
import LandingPage from "../src/components/LandingPage";
import SectionA from "../src/components/SectionA";
import SectionB from "../src/components/SectionB";
import SectionC from "../src/components/SectionC";


export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  // const { theme, setTheme } = useTheme();

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // const switchTheme = () => {
  //   if (isMounted) {
  //     setTheme(theme === "light" ? "dark" : "light");
  //   }
  // };
  return (
    <>
      <Head>
        <title>Hello this is the sample of darkn theme </title>
      </Head>
      <LandingPage />
      {/* <SectionA /> */}
      {/* <SectionB /> */}
      {/* <SectionC /> */}

    </>
  )
}
