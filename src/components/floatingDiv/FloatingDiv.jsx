import { Flex, Text } from "@chakra-ui/react";

export default function FloatingDiv(props) {
  return (
    <Flex
      flexDir={"row"}
      align={"center"}
      justifyContent={"center"}
      w={"fit-content"}
      h={"fit-content"}
      p={"5px"}
      pos={"absolute"}
      left={`${props.left}`}
    >
      <Text fontSize={"2xl"}>
        <i className={props.class}></i>
      </Text>
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        {props.title}
      </Text>
    </Flex>
  );
}
