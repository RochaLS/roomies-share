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
} from "@chakra-ui/react";

import { PrimaryButton } from "./PrimaryButton";
import { FiPlusCircle } from "react-icons/fi";

export function AddItemModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
                />
                <FormLabel>Cost</FormLabel>
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
                <Textarea
                  focusBorderColor="purple.500"
                  placeholder="Additional Notes..."
                  variant="filled"
                />
                <FormLabel>Split in between</FormLabel>
                <CheckboxGroup
                  colorScheme="purple"
                  defaultValue={["Lucas", "Gabriel"]}
                >
                  <Stack spacing={[1, 5]} direction={["column", "row"]}>
                    <Checkbox value="Lucas">Lucas</Checkbox>
                    <Checkbox value="Gabriel">Gabriel</Checkbox>
                    <Checkbox value="Francesco">Francesco</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </Stack>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="purple"
              mr={3}
              onClick={onClose}
              _hover={{ bgColor: "#5149fb" }}
            >
              Add
            </Button>
            <Button variant="ghost">Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
