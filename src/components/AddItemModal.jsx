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
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            doloribus officia quibusdam illum alias dolore non consequatur
            recusandae sequi, illo voluptatum, ea similique accusamus
            doloremque, odit voluptatibus aliquid ad. Omnis.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
