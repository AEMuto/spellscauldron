import { Flex, Button } from '@chakra-ui/react';
import React from 'react';
import SpellsTable from './spellsTable';
import SpellsInfo from './spellsInfo';
import spells from '../data/spells.json';

function Spells() {
  const savedSpells = React.useMemo(() => spells, []);
  const [data, setData] = React.useState(savedSpells); // React.useMemo(() => spells, []);
  const [spellData, setSpellData] = React.useState();

  function handleLevel(level) {
    setData(savedSpells.filter(spell => spell.level_int === level));
  }
  function handleClass(className) {
    setData(savedSpells.filter(spell => spell.class.includes(className)));
  }
  function handleReset() {
    setData(savedSpells);
  }
  function getSpellInfo() {
    return row => ({
      onClick: () => {
        setSpellData(data.filter(spell => spell.name === row.values.name));
        console.log(spellData);
      },
      style: {
        cursor: 'pointer',
      },
    });
  }
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
          <Flex wrap="wrap">
            <Button
              size="sm"
              mr={2}
              mb={2}
              onClick={() => handleClass('Warlock')}
            >
              Warlock
            </Button>
            <Button size="sm" mr={2} mb={2} onClick={() => handleLevel(0)}>
              Cantrip
            </Button>
            <Button size="sm" mr={2} mb={2} onClick={() => handleLevel(1)}>
              Level 1
            </Button>
            <Button size="sm" mr={2} mb={2} onClick={() => handleLevel(2)}>
              Level 2
            </Button>
            <Button size="sm" mr={2} mb={2} onClick={() => handleLevel(3)}>
              Level 3
            </Button>
            <Button size="sm" mr={2} mb={2} onClick={() => handleLevel(4)}>
              Level 4
            </Button>
            <Button size="sm" mr={2} mb={2} onClick={() => handleLevel(5)}>
              Level 5
            </Button>
            <Button size="sm" mr={2} mb={2} onClick={() => handleLevel(6)}>
              Level 6
            </Button>
            <Button size="sm" mr={2} mb={2} onClick={() => handleLevel(7)}>
              Level 7
            </Button>
            <Button size="sm" mr={2} mb={2} onClick={() => handleLevel(8)}>
              Level 8
            </Button>
            <Button size="sm" mr={2} mb={2} onClick={() => handleLevel(9)}>
              Level 9
            </Button>
            <Button size="sm" mr={2} mb={2} onClick={() => handleReset()}>
              Reset
            </Button>
          </Flex>
          <Flex overflowY="auto" fontSize=".8em">
            <SpellsTable data={data} getRowProps={getSpellInfo()} />
          </Flex>
        </Flex>
        <Flex direction="column" flex="1" m={2} position="relative">
          <SpellsInfo spellData={spellData ? spellData[0] : data[0]} />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Spells;
