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
import { EditItemModal } from "./components/EditItemModal";

import { FiTrash2 } from "react-icons/fi";

import React, { useState } from "react";

const Home = () => {
  const item1 = {
    id: 1,
    name: "Fresh Prep",
    totalCost: 94.0,
    boughtBy: { name: "Lucas Rocha", id: 1 },
    splittedBetween: ["Lucas", "Gabriel"],
    finalCost: 47.0,
  };

  const item2 = {
    id: 2,
    name: "Kana's present",
    totalCost: 36.0,
    boughtBy: { name: "Gabriel Figliolino", id: 2 },
    splittedBetween: ["Gabriel", "Lucas"],
    finalCost: 18.0,
  };
  const [items, setItems] = useState([item1, item2]);

  const currentUserId = 1;

  function handleUpdate(newItem) {
    setItems([...items, newItem]);
  }

  function handleEdit(itemToUpdate) {
    console.log(itemToUpdate);
    // const updatedItems = items.map((item) => {
    //   if (item.id === itemToUpdate.id) {
    //     return itemToUpdate;
    //   }
    // });
    const updatedItems = items.map((item) => {
      if (item.id === itemToUpdate.id) {
        return itemToUpdate;
      }
      return item;
    });
    setItems(updatedItems);
    console.log(updatedItems);
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
                    <Td>Lucas Rocha</Td>
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
                          <EditItemModal
                            groupUsers={users}
                            values={{
                              id: item.id,
                              name: item.name,
                              totalCost: item.totalCost,
                              boughtBy: item.boughtBy,
                              splittedBetween: item.splittedBetween,
                              additionalNotes: item.additionalNotes,
                            }}
                            handleEdit={handleEdit}
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
