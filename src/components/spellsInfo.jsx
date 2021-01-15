import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function SpellsInfo({ spellData }) {
  return (
    <Box>
      <Heading mb={2}>{spellData.name}</Heading>
      <Text as="i">
        {spellData.level} {spellData.school}
      </Text>
      <Text>
        <Text as="b">Casting Time</Text>: {spellData.casting_time}
      </Text>
      <Text>
        <Text as="b">Range</Text>: {spellData.range}
      </Text>
      <Text>
        <Text as="b">Components</Text>:{' '}
        {spellData.material
          ? `${spellData.components} - ${spellData.material}`
          : spellData.components}
      </Text>
      <Text>
        <Text as="b">Duration</Text>: {spellData.duration}
      </Text>
      <Divider mb={2} mt={2} />
      <Text>{spellData.desc}</Text>
      {spellData.higher_level && (
        <Text mt={2}>
          <Text as="b">At higher level</Text>.{spellData.higher_level}
        </Text>
      )}
      <Divider mb={2} mt={2} />
      <Text>
        <Text as="b">Class</Text>: {spellData.class}
      </Text>
      <Text>
        <Text as="b">Source</Text>: {spellData.page}
      </Text>
    </Box>
  );
}

export default SpellsInfo;
