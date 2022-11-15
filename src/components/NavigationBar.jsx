import { Flex, Link, Heading, HStack } from "@chakra-ui/react";
import { NavBarButton } from "./NavBarButton";

import { Link as ReachLink } from "react-router-dom";

export function NavigationBar() {
  return (
    <Flex
      boxShadow="sm"
      bgColor="white"
      align="center"
      justify="space-between"
      p="18px"
    >
      <Link as={ReachLink} to="/" _hover={{ color: "#5149fb" }}>
        <Heading size="md">
          Dashboard{" "}
          <span style={{ color: "#6C63FF", fontSize: "42px" }}>.</span>
        </Heading>
      </Link>
      <HStack spacing="20px">
        <Link as={ReachLink} to="group" _hover={{ color: "#5149fb" }}>
          My Group
        </Link>
        <Link as={ReachLink} to="settings" _hover={{ color: "#5149fb" }}>
          Settings
        </Link>
        <NavBarButton />
      </HStack>
    </Flex>
  );
}
