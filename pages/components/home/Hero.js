import {
  Flex,
  Image,
  Heading,
  Text,
  useMediaQuery,
  Link,
} from "@chakra-ui/react";
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
          h={"90vh"}
          alt="bg"
        />
        <Flex
          direction={"column"}
          h="55vh"
          w={isLargerThanMd ? "38%" : "100%"}
          p={isLargerThanMd ? 10 : 30}
          gap={3}
          position={"absolute"}
          justify={"center"}
          right={0}
          pt={"12%"}
        >
          <Heading
            as="h1"
            color={"#FF006B"}
            fontFamily={"Turret Road"}
            size={"3xl"}
            textAlign={!isLargerThanMd ? "center" : "initial"}
          >
            You Are Not Bullish Enough Anon 🐂
          </Heading>
          <Text
            color="white"
            fontFamily={"Turret Road"}
            fontSize={"32px"}
            textAlign={!isLargerThanMd ? "center" : "initial"}
          >
            Memecoins Are Coming To{" "}
            <Link
              href="https://minaprotocol.com"
              _hover={{ textDecoration: "none" }}
            >
              Mina Protocol
            </Link>
            . Soon...
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
