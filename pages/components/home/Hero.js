import { Flex, Image, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import "@fontsource/turret-road/800.css";

export default function Hero() {
  const [isLargerThanMd] = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      <Flex position={"relative"} w="100%" h="100%">
        <Image
          src="background.png"
          position={"absolute"}
          zIndex={-1}
          filter={!isLargerThanMd ? "brightness(50%)" : "none"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          w={isLargerThanMd ? "100%" : ""}
          h={"100vh"}
          alt="bg"
        />
        <Flex
          direction={"column"}
          h="70vh"
          w={isLargerThanMd ? "38%" : "100%"}
          p={isLargerThanMd ? 10 : 30}
          gap={3}
          position={"absolute"}
          justify={"center"}
          right={0}
          pt={"12%"}
        >
          <Heading
            color={"#FF006B"}
            fontFamily={"Turret Road"}
            size={"3xl"}
            textAlign={!isLargerThanMd ? "center" : "initial"}
          >
            You Are Not Bullish Enough Anon
          </Heading>
          <Text
            color="white"
            fontFamily={"Turret Road"}
            fontSize={"36px"}
            textAlign={!isLargerThanMd ? "center" : "initial"}
          >
            Coming Soon...
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
