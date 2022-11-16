import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  Box,
  Heading,
  StackDivider,
  Text,
  Button,
} from "@chakra-ui/react";

import { NavigationBar } from "../components/NavigationBar";

export function Settings() {
  return (
    <>
      <NavigationBar />
      <Heading m="50px" textAlign="center">
        Settings
      </Heading>
      <Card bgColor="white" margin="0 auto" w="50%">
        <CardHeader>
          <Heading size="md">User Settings</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Button
                variant="link"
                colorScheme="purple"
                _hover={{ color: "#5149fb" }}
              >
                Edit User Information
              </Button>
              <Text pt="2" fontSize="sm">
                Edit user information such as name, e-mail and profile picture
              </Text>
            </Box>
            <Box>
              <Button
                variant="link"
                colorScheme="purple"
                _hover={{ color: "#5149fb" }}
              >
                Change Currency
              </Button>
              <Text pt="2" fontSize="sm">
                Choose a different currency
              </Text>
            </Box>
            <Box>
              <Button colorScheme="purple" _hover={{ bg: "#5149fb" }}>
                Logout
              </Button>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
