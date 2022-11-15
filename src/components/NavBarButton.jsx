import { Button } from "@chakra-ui/react";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export function NavBarButton() {
  const navigate = useNavigate();

  return (
    <Button
      size="md"
      bgColor="#6C63FF"
      _hover={{ bg: "#5149fb" }}
      rightIcon={<FiX size="1.2em" />}
      onClick={() => {
        navigate("/login");
      }}
    >
      Lucas Rocha
    </Button>
  );
}
