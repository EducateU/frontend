import {
  Box,
  useColorModeValue,
  useColorMode,
  Button,
  Avatar,
  Heading,
  Spacer,
  MenuButton,
  Flex,
  MenuItem,
  Menu,
  MenuList,
  Wrap,
  InputRightElement,
  WrapItem,
  Input,
  InputGroup,
  IconButton,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import type { NextPage } from "next";

const NavBar: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Box
        p={3}
        pl={6}
        pr={6}
        pt={4}
        pb={4}
        color={useColorModeValue(
          "lightMode.mainTextColor",
          "darkMode.mainTextColor"
        )}
      >
        <Flex>
          <Heading>LOGO</Heading>
          <Spacer />
          <Flex>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                border="0px"
                _hover={{ color: "teal" }}
                _active={{ color: "teal" }}
                _focus={{ color: "teal" }}
                color={useColorModeValue(
                  "lightMode.mainTextColor",
                  "darkMode.mainTextColor"
                )}
              >
                Actions
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>{" "}
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                border="0px"
                _hover={{ color: "teal" }}
                _active={{ color: "teal" }}
                _focus={{ color: "teal" }}
                color={useColorModeValue(
                  "lightMode.mainTextColor",
                  "darkMode.mainTextColor"
                )}
              >
                Actions
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                border="0px"
                _hover={{ color: "teal" }}
                _active={{ color: "teal" }}
                _focus={{ color: "teal" }}
                color={useColorModeValue(
                  "lightMode.mainTextColor",
                  "darkMode.mainTextColor"
                )}
              >
                Community
              </MenuButton>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                border="0px"
                _hover={{ color: "teal" }}
                _active={{ color: "teal" }}
                _focus={{ color: "teal" }}
                color={useColorModeValue(
                  "lightMode.mainTextColor",
                  "darkMode.mainTextColor"
                )}
              >
                For Business
              </MenuButton>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                border="0px"
                _hover={{ color: "teal" }}
                _active={{ color: "teal" }}
                _focus={{ color: "teal" }}
                color={useColorModeValue(
                  "lightMode.mainTextColor",
                  "darkMode.mainTextColor"
                )}
              >
                Contact
              </MenuButton>
            </Menu>
          </Flex>

          <Spacer />
          <Flex>
            <Button
              borderColor="white"
              color={useColorModeValue(
                "lightMode.mainTextColor",
                "darkMode.mainTextColor"
              )}
              onClick={toggleColorMode}
              mr={30}
            >
              Sign In
            </Button>

            <Button
              borderColor="black"
              color={useColorModeValue(
                "lightMode.mainTextColor",
                "darkMode.mainTextColor"
              )}
              onClick={toggleColorMode}
            >
              Sign up
            </Button>
          </Flex>
        </Flex>
      </Box>

      <Box
        float="right"
        border="1px"
        width="74%"
        color={useColorModeValue(
          "lightMode.mainTextColor",
          "darkMode.mainTextColor"
        )}
      ></Box>
    </Box>
  );
};

export default NavBar;
