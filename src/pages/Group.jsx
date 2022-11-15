import { NavigationBar } from "../components/NavigationBar";
import { Heading, SimpleGrid, Highlight, Flex, Button } from "@chakra-ui/react";
import { GroupUserCard } from "../components/GroupUserCard";

import { FiLogOut } from "react-icons/fi";

const user1 = {
  id: 1,
  firstName: "Lucas",
  lastName: "Rocha",
  img: "https://github.com/RochaLS.png",
};

const user2 = {
  id: 2,
  firstName: "John",
  lastName: "Doe",
};

const user3 = {
  id: 3,
  firstName: "Gabriel",
  lastName: "Figliolino",
};

const user4 = {
  id: 4,
  firstName: "Francesco",
  lastName: "Trotta",
};

export function Group() {
  return (
    <>
      <NavigationBar />
      <Heading m="50px" textAlign="center">
        My Group
      </Heading>
      <Flex justify="space-between">
        <Heading size="md" ml="100px">
          <Highlight
            query="67538"
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: "#847dff",
              color: "white",
            }}
          >
            Group ID: 67538
          </Highlight>
        </Heading>
        <Button
          rightIcon={<FiLogOut size="20px" />}
          colorScheme="red"
          mr="100px"
        >
          Leave Group
        </Button>
      </Flex>
      <SimpleGrid m="100px" columns={[1, 2, 3]} spacing="50px">
        <GroupUserCard user={user1} />
        <GroupUserCard user={user2} />
        <GroupUserCard user={user3} />
        <GroupUserCard user={user4} />
      </SimpleGrid>
    </>
  );
}
