import {
  Center,
  FormControl,
  Input,
  Heading,
  Stack,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  return (
    <Center h="100vh">
      <Box>
        <Image
          objectFit="fill"
          boxSize="sm"
          src="images/login.svg"
          margin="0 auto"
        />
        <FormControl w="500px">
          <Stack spacing="20px">
            <Heading size="lg" textAlign="center">
              Login
            </Heading>
            <Input
              type="email"
              placeholder="E-mail"
              variant="filled"
              size="lg"
              focusBorderColor="purple.500"
            />
            <Input
              type="password"
              placeholder="Password"
              variant="filled"
              size="lg"
              focusBorderColor="purple.500"
            />
            <Center>
              <Button
                colorScheme="purple"
                w="50%"
                size="lg"
                _hover={{ bg: "#5149fb" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Login
              </Button>
            </Center>
          </Stack>
        </FormControl>
      </Box>
    </Center>
  );
}
