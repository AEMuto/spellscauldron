import React, { Component } from 'react';
import {
  ChakraProvider,
  Box,
  Container,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  Heading,
  Spacer,
  Button,
  Center,
  Divider,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import SpellsTable from './components/spellsTable';
import NavBar from './components/navBar';
import customTheme from './utils/theme';

class App extends Component {
  state = {};
  render() {
    return (
      // <ChakraProvider theme={theme}>
      //   <Box textAlign="center" fontSize="xl">
      //     <Grid minH="100vh" p={3}>
      //       <ColorModeSwitcher justifySelf="flex-end" />
      //       <VStack spacing={8}>
      //         <SpellsTable />
      //       </VStack>
      //     </Grid>
      //   </Box>
      // </ChakraProvider>
      <ChakraProvider theme={customTheme}>
        <NavBar position="fixed" />
        <Container maxW="xl" pt={32} centerContent>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Divider />
          <SpellsTable />
        </Container>
      </ChakraProvider>
    );
  }
}

export default App;
