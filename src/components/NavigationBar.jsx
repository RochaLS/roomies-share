import { Flex, Link, Text, HStack } from "@chakra-ui/react";
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
      <Text>Dashboard</Text>
      <HStack spacing="20px">
        <Link as={ReachLink} to="settings" _hover={{ color: "#5149fb" }}>
          Settings
        </Link>
        <NavBarButton />
      </HStack>
    </Flex>
  );
}
