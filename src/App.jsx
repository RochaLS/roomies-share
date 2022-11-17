import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Avatar,
  AvatarGroup,
  Heading,
  Flex,
} from "@chakra-ui/react";

import { NavigationBar } from "./components/NavigationBar";
import { AddItemModal } from "./components/AddItemModal";

const Home = () => {
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

  const users = [user1, user2, user3, user4];

  return (
    <>
      <NavigationBar />
      <Heading m="50px" textAlign="center">
        Expenses Overview
      </Heading>
      <Box mr="12%" ml="12%" mb="12%">
        <TableContainer
          bgColor="white"
          p="20px"
          boxShadow="sm"
          borderRadius="10px"
        >
          <Table variant="striped" size="lg">
            <Thead>
              <Tr>
                <Th>Bought by</Th>
                <Th>Item</Th>
                <Th>Cost</Th>
                <Th>Splitted between</Th>
                <Th>Final Cost</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Lucas Rocha</Td>
                <Td>Fresh Prep</Td>
                <Td>$94.00</Td>
                <Td>
                  <AvatarGroup>
                    <Avatar name="Lucas Rocha" />
                    <Avatar name="Lucas Rocha" />
                  </AvatarGroup>
                </Td>
                <Td>$47.00</Td>
              </Tr>
              <Tr>
                <Td>Lucas Rocha</Td>
                <Td>Fresh Prep</Td>
                <Td>$94.00</Td>
                <Td>
                  <AvatarGroup>
                    <Avatar name="Lucas Rocha" />
                    <Avatar name="Lucas Rocha" />
                  </AvatarGroup>
                </Td>
                <Td>$47.00</Td>
              </Tr>
              <Tr>
                <Td>Lucas Rocha</Td>
                <Td>Fresh Prep</Td>
                <Td>$94.00</Td>
                <Td>
                  <AvatarGroup>
                    <Avatar name="Lucas Rocha" />
                    <Avatar name="Lucas Rocha" />
                  </AvatarGroup>
                </Td>
                <Td>$47.00</Td>
              </Tr>
              <Tr>
                <Td>Lucas Rocha</Td>
                <Td>Fresh Prep</Td>
                <Td>$94.00</Td>
                <Td>
                  <AvatarGroup>
                    <Avatar name="Lucas Rocha" />
                    <Avatar name="Lucas Rocha" />
                  </AvatarGroup>
                </Td>
                <Td>$47.00</Td>
              </Tr>
              <Tr>
                <Td>Lucas Rocha</Td>
                <Td>Fresh Prep</Td>
                <Td>$94.00</Td>
                <Td>
                  <AvatarGroup>
                    <Avatar name="Lucas Rocha" />
                    <Avatar name="Lucas Rocha" />
                  </AvatarGroup>
                </Td>
                <Td>$47.00</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Flex mt="20px" mr="10px" justify="flex-end">
          <AddItemModal groupUsers={users} />
        </Flex>
      </Box>
    </>
  );
};

export default Home;
