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
  IconButton,
  HStack,
} from "@chakra-ui/react";

import { NavigationBar } from "./components/NavigationBar";
import { AddItemModal } from "./components/AddItemModal";

import { FiTrash2, FiEdit3 } from "react-icons/fi";

import React, { useState } from "react";

const Home = () => {
  const item1 = {
    id: 1,
    name: "Fresh Prep",
    totalCost: 94.0,
    boughtBy: { name: "Lucas Rocha", id: 1 },
    splittedBetween: ["Lucas Rocha", "Gabriel Figliolino"],
    finalCost: 47.0,
  };

  const item2 = {
    id: 2,
    name: "Kana's present",
    totalCost: 36.0,
    boughtBy: { name: "Gabriel Figliolino", id: 2 },
    splittedBetween: ["Gabriel Figliolino", "Lucas Rocha"],
    finalCost: 18.0,
  };
  const [items, setItems] = useState([item1, item2]);

  const currentUserId = 1;

  function handleUpdate(newItem) {
    setItems([...items, newItem]);
  }

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
              {items.map((item, index) => {
                return (
                  <Tr key={index}>
                    <Td>{item.boughtBy.name}</Td>
                    <Td>{item.name}</Td>
                    <Td>${Number(item.totalCost).toFixed(2)}</Td>
                    <Td>
                      <AvatarGroup>
                        {item.splittedBetween.map((user, index) => {
                          return <Avatar key={index} name={user} />;
                        })}
                      </AvatarGroup>
                    </Td>
                    <Td>${Number(item.finalCost).toFixed(2)}</Td>
                    <Td>
                      {currentUserId === item.boughtBy.id && (
                        <HStack spacing="10px">
                          <IconButton
                            icon={<FiEdit3 />}
                            colorScheme="purple"
                            variant="outline"
                          />
                          <IconButton
                            key={index}
                            icon={<FiTrash2 />}
                            colorScheme="red"
                            variant="outline"
                            onClick={() => {
                              setItems(
                                items.filter((item) => item !== items[index])
                              );
                            }}
                          />
                        </HStack>
                      )}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <Flex mt="20px" mr="10px" justify="flex-end">
          <AddItemModal groupUsers={users} handleUpdate={handleUpdate} />
        </Flex>
      </Box>
    </>
  );
};

export default Home;
