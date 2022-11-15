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
  IconButton,
} from "@chakra-ui/react";

import { FiTrash2, FiEdit } from "react-icons/fi";

export function GroupUserCard({ user }) {
  const fullName = `${user.firstName}  ${user.lastName}`;
  const groupOwnerId = 1;
  const currentUserId = 1;

  console.log(user.id);
  console.log(currentUserId);
  console.log(currentUserId === user.id);

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
          {currentUserId === groupOwnerId && currentUserId != user.id && (
            <Button
              leftIcon={<FiTrash2 size="20px" />}
              m="0 auto"
              variant="outline"
              colorScheme="red"
            >
              Remove
            </Button>
          )}
        </CardFooter>
      </Stack>
    </Card>
  );
}
