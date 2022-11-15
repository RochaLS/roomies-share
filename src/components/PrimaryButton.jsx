import { Button } from "@chakra-ui/react";

export function PrimaryButton({ text, icon, onClick }) {
  return icon ? (
    <Button
      size="lg"
      bgColor="#6b63ff"
      _hover={{ bg: "#5149fb" }}
      rightIcon={icon}
      onClick={onClick}
    >
      {text}
    </Button>
  ) : (
    <Button
      onClick={onClick}
      size="lg"
      bgColor="#6b63ff"
      _hover={{ bg: "#5149fb" }}
    >
      {text}
    </Button>
  );
}
