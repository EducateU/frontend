import { Box, useColorModeValue, useColorMode, Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import NavBar from "../component/navbar";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <NavBar />

      <Button
        color={useColorModeValue(
          "lightMode.mainTextColor",
          "darkMode.mainTextColor"
        )}
        onClick={toggleColorMode}
      >
        click to change themegujhkjl
      </Button>
    </Box>
  );
};

export default Home;
