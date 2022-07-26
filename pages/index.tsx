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
import NavBar from "../component/navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <NavBar />

      <Flex
        justifyContent={"space-between"}
        w={["95%", "95%", "90%", "90%"]}
        mx="auto"
        mt="30px"
      >
        <Box w={["100%", "100%", "50%", "50%"]}>
          <Text
            fontSize="42px"
            color={useColorModeValue(
              "lightMode.mainTextColor",
              "darkMode.mainTextColor"
            )}
          >
            Learn how to code and build things in{" "}
            <Box as="span">
              {"<"}Programming{"/>"}
            </Box>{" "}
          </Text>
        </Box>

        <Box w={["100%", "100%", "30%", "30%"]}>
          <Text>
            Because learning to code might be the easiest way to change your
            career
          </Text>

          <Button
            background="transparent"
            w="100%"
            h="58px"
            borderRadius="25px"
            mt="17px"
            color={useColorModeValue(
              "lightMode.mainTextColor",
              "darkMode.mainTextColor"
            )}
          >
            Join a Class
          </Button>
        </Box>
      </Flex>
      {/* <Flex
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
      </Flex> */}
      {/* <Button
        color={useColorModeValue(
          "lightMode.mainTextColor",
          "darkMode.mainTextColor"
        )}
        onClick={toggleColorMode}
      >
        click to change theme
      </Button> */}
    </Box>
  );
};

export default Home;
