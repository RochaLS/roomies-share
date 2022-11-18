import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
  FormControl,
  FormLabel,
  CheckboxGroup,
  Checkbox,
  IconButton,
  FormHelperText,
} from "@chakra-ui/react";

import { FiEdit3 } from "react-icons/fi";

export function EditItemModal({ groupUsers, handleEdit, values }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //Form Controls
  const [itemName, setItemName] = useState(values.name);
  const [itemTotalCost, setItemTotalCost] = useState(values.totalCost);
  const [additionalNotes, setAdditionalNotes] = useState(
    values.additionalNotes
  );

  const [checkedState, setCheckedState] = useState(new Array(3).fill(false));
  const [selectedUsers, setSelectedUsers] = useState(values.splittedBetween);

  const handleOnChange = (value, position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    setSelectedUsers([...selectedUsers, value]);
  };

  const currentUser = "Lucas Rocha";

  return (
    <>
      <IconButton
        icon={<FiEdit3 />}
        colorScheme="purple"
        variant="outline"
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Edit Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Stack spacing="20px">
                <Input
                  focusBorderColor="purple.500"
                  type="text"
                  placeholder="Item Name"
                  variant="filled"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
                <FormLabel>Total Cost</FormLabel>
                {/* <FormHelperText>
                  Previous Cost: {"$" + values.totalCost.toFixed(2)}
                </FormHelperText> */}
                <NumberInput
                  step={5}
                  defaultValue={0}
                  min={0}
                  precision={2}
                  variant="filled"
                  focusBorderColor="purple.500"
                  value={itemTotalCost}
                  onChange={(e) => setItemTotalCost(e)}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>

                <Textarea
                  focusBorderColor="purple.500"
                  placeholder="Additional notes..."
                  variant="filled"
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                />
                <FormLabel>Split in between</FormLabel>
                <CheckboxGroup
                  defaultValue={selectedUsers}
                  colorScheme="purple"
                >
                  <Stack spacing={[1, 5]} direction={["column", "row"]}>
                    {groupUsers.map((user, index) => (
                      <Checkbox
                        key={index}
                        value={user.firstName}
                        checked={checkedState[index]}
                        onChange={(e) => handleOnChange(e.target.value, index)}
                      >
                        {user.firstName}
                      </Checkbox>
                    ))}
                  </Stack>
                </CheckboxGroup>
              </Stack>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="purple"
              mr={3}
              onClick={() => {
                const updatedItem = {
                  id: values.id,
                  name: itemName,
                  totalCost: itemTotalCost,
                  boughtBy: { name: currentUser, id: 1 }, // Need to use ID later on
                  splittedBetween: selectedUsers,
                  finalCost: itemTotalCost / selectedUsers.length,
                };
                handleEdit(updatedItem);
                onClose();
              }}
              _hover={{ bgColor: "#5149fb" }}
            >
              Update
            </Button>
            <Button onClick={onClose} variant="ghost">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
