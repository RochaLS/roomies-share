import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  FormControl,
  Stack,
  Heading,
  Center,
} from "@chakra-ui/react";

export function EditUserInfoModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Button
        onClick={onOpen}
        variant="link"
        colorScheme="purple"
        _hover={{ color: "#5149fb" }}
      >
        Edit User Information
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Edit Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Stack spacing="20px">
                <Input
                  type="text"
                  placeholder="First Name"
                  variant="filled"
                  size="md"
                  focusBorderColor="purple.500"
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  variant="filled"
                  size="md"
                  focusBorderColor="purple.500"
                />
                <Input
                  type="email"
                  placeholder="E-mail"
                  variant="filled"
                  size="md"
                  focusBorderColor="purple.500"
                />
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
