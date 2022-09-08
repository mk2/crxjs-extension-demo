import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Portal,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const containerRef = useRef(null);

  return (
    <>
      <Portal containerRef={containerRef}>hoge</Portal>
      <Box background={"tomato"} pos="fixed" top={0} right={0} width={"10vh"}>
        <Button onClick={onOpen}>Open</Button>
      </Box>
      <Drawer
        portalProps={{ containerRef }}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Box
        ref={containerRef}
        width={"20vh"}
        height={"20vh"}
        background="magenta"
      />
    </>
  );
}

export default App;
