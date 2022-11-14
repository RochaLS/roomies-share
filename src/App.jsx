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
          <AddItemModal />
        </Flex>
      </Box>
    </>
  );
};

export default Home;
