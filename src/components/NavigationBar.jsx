import { Flex, Text, Button } from "@chakra-ui/react";
import { FiX } from "react-icons/fi";
import { AddItemModal } from "./AddItemModal";
import { NavBarButton } from "./NavBarButton";

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
      <NavBarButton />
    </Flex>
  );
}
