import { Flex } from '@chakra-ui/react';
import React from 'react';
import SpellsTable from './spellsTable';
import SpellsInfo from './spellsInfo';

function Spells(props) {
  return (
    <Flex
      direction="column"
      h={{ base: null, lg: 'calc(100vh - 72px)' }}
      maxH={{ base: null, lg: 'calc(100vh - 72px)' }}
      position="relative"
    >
      <Flex
        h="100%"
        maxH="100%"
        maxW={{ base: 'calc(100vw - 1.1em)', lg: '62em', xl: '70em' }}
        minW={{ base: null, lg: '62em', xl: '70em' }}
        marginX="auto"
        paddingX=".5em"
        direction={{ base: 'column', lg: 'row' }}
        position="relative"
      >
        <Flex
          direction="column"
          wrap="nowrap"
          flex="2"
          maxH={{ base: '60vh', lg: '100%' }}
          m={2}
          marginBottom={{ base: 0, lg: 2 }}
          position="relative"
        >
          <Flex overflowY="auto" fontSize=".8em">
            <SpellsTable />
          </Flex>
        </Flex>
        <Flex direction="column" flex="1" m={2} position="relative">
          <SpellsInfo />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Spells;
