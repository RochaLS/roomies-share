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
  Switch,
  HStack,
} from "@chakra-ui/react";

import { PrimaryButton } from "./PrimaryButton";
import { FiPlusCircle } from "react-icons/fi";
import { useEffect, useState } from "react";

export function AddItemModal({ groupUsers, handleUpdate }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [splitEqually, setSplitEqually] = useState(true);

  //Form Controls
  const [itemName, setItemName] = useState("");
  const [itemTotalCost, setItemTotalCost] = useState("0");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const [checkedState, setCheckedState] = useState(new Array(3).fill(false));
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleOnChange = (value, position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    setSelectedUsers([...selectedUsers, value]);
  };

  function getAllCheckedBoxes() {
    let checkedCheckboxes = [];
    for (let i = 0; i < checkedState; i++) {
      if (checkedState[i] === true) {
        checkedCheckboxes.push(i);
      }
    }
    return checkedCheckboxes;
  }

  const currentUser = "Lucas Rocha";

  return (
    <>
      <PrimaryButton
        onClick={onOpen}
        text="Add Item"
        icon={<FiPlusCircle size="1.2em" />}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Add Item</ModalHeader>
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
                  placeholder="Additional Notes..."
                  variant="filled"
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                />
                <FormLabel>Split in between</FormLabel>
                <CheckboxGroup colorScheme="purple">
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
                {/* <HStack>
                  <FormLabel htmlFor="split-equaly" mb="0">
                    Split Equally?
                  </FormLabel>
                  <Switch
                    colorScheme="purple"
                    id="split-equally"
                    onChange={() => {
                      setSplitEqually(!splitEqually);
                    }}
                  />
                </HStack> */}
                {/* {splitEqually && (
                  <>
                    <NumberInput
                      step={5}
                      defaultValue={0}
                      min={0}
                      precision={2}
                      variant="filled"
                      focusBorderColor="purple.500"
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    <NumberInput
                      step={5}
                      defaultValue={0}
                      min={0}
                      precision={2}
                      variant="filled"
                      focusBorderColor="purple.500"
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </>
                )} */}
              </Stack>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="purple"
              mr={3}
              onClick={() => {
                const newItem = {
                  id: 1,
                  name: itemName,
                  totalCost: itemTotalCost,
                  boughtBy: currentUser, // Need to use ID later on
                  splittedBetween: selectedUsers,
                  finalCost: itemTotalCost / selectedUsers.length,
                };
                handleUpdate(newItem);
                onClose();
                setItemName("");
                setItemTotalCost("");
                setAdditionalNotes("");
              }}
              _hover={{ bgColor: "#5149fb" }}
            >
              Add
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
