import { Button } from "@chakra-ui/react";
import { FiX } from "react-icons/fi";

export function NavBarButton() {
  return (
    <Button
      size="md"
      bgColor="#6C63FF"
      _hover={{ bg: "#5149fb" }}
      rightIcon={<FiX size="1.2em" />}
    >
      Lucas Rocha
    </Button>
  );
}
