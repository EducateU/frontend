import {
  Box,
  useColorModeValue,
  useColorMode,
  Button,
  Text,
  Flex,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Flex
        marginTop="10px"
        width={["100%", "100%", "70%", "60%"]}
        textAlign="center"
        border="1px solid red"
        mx="auto"
        flexDirection="column"
      >
        <Text>My name is ugochukwu</Text>
        <FormControl variant="floating" id="email" isRequired>
          <Input
            type="email"
            placeholder=" "
            bg={colorMode === "dark" ? "white" : "white"}
            borderColor="#000"
          />
          <FormLabel>Email</FormLabel>
        </FormControl>
      </Flex>
      <Button
        color={useColorModeValue(
          "lightMode.mainTextColor",
          "darkMode.mainTextColor"
        )}
        onClick={toggleColorMode}
      >
        click to change theme
      </Button>
    </Box>
  );
};

export default Home;
