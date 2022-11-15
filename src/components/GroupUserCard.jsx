import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Stack,
  Image,
  Text,
  Avatar,
} from "@chakra-ui/react";

import { FiTrash2 } from "react-icons/fi";

export function GroupUserCard({ user }) {
  const fullName = `${user.firstName}  ${user.lastName}`;
  return (
    <Card align="center" overflow="hidden" variant="elevated" bgColor="white">
      <Avatar
        border="5px solid white"
        m="10px"
        size="2xl"
        name={fullName}
        src={user.img}
      />
      <Stack>
        <CardBody>
          <Heading textAlign="center" size="md">
            {fullName}
          </Heading>
        </CardBody>
        <CardFooter>
          <Button
            leftIcon={<FiTrash2 size="20px" />}
            m="0 auto"
            variant="outline"
            colorScheme="red"
          >
            Remove
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}
