import { Flex, Spacer, Image, Heading, Text } from "@chakra-ui/react";
import "@fontsource/turret-road/800.css";

export default function Hero() {
  return (
    <>
      <Flex position={"relative"} w="100%" h="100%">
        <Image
          position={"absolute"}
          src="background.png"
          zIndex={-1}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          w={"100%"}
          alt="bg"
        />
        <Flex
          direction={"column"}
          w={"35%"}
          h="90vh"
          p={5}
          gap={2}
          position={"absolute"}
          right={0}
          pt={"12%"}
        >
          <Heading color={"#FF006B"} fontFamily={"Turret Road"} size={"2xl"}>
            You Are Not Bullish Enough Anon
          </Heading>
          <Text color="white" fontFamily={"Turret Road"} fontSize={"40px"}>
            Coming Soon...
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
