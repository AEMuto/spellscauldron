import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import NavBar from './components/navBar';
import customTheme from './utils/theme';
import Spells from './components/spells';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Flex
        // bg="tomato"
        w="100vw"
        h="100vh"
        direction="column"
        wrap="nowrap"
        position="absolute"
        overflowY={{ base: 'auto', lg: 'hidden' }}
      >
        <NavBar />
        <Spells />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
