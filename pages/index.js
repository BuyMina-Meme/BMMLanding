import Head from "next/head";
import Hero from "./components/home/Hero";
import Header from "./components/home/Header";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Buy Mina Meme</title>
        <meta name="description" content="Buy Memecoins on Mina Protocol." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction={"column"} w={"100%"}>
        <Header />
        <Hero />
      </Flex>
    </>
  );
}
