import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Container,
  VStack,
  Text,
  Link,
  HStack,
  Stack,
  Circle,
  Code,
  Grid,
  GridItem,
  theme,
  Flex,
  Heading,
  Spacer,
  Button,
  Center,
  Divider,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import SpellsTable from './components/spellsTable';
import NavBar from './components/navBar';
import customTheme from './utils/theme';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Stack position="fixed" w="100%" spacing={0} mt={-36}>
        <NavBar />
      </Stack>
      <Container maxW="xl" mt={36} centerContent>
        <SpellsTable />
      </Container>
    </ChakraProvider>
  );
}

export default App;
