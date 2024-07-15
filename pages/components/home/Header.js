import { Flex, Image, Spacer } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Flex p={5}>
        <Image src="g3.png" alt="Icon" h={10} />
        <Spacer />
      </Flex>
    </>
  );
}
