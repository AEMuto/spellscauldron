import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function SpellsInfo({ data }) {
  return (
    <Box>
      <Heading mb={2}>{data[0].name}</Heading>
      <Text as="i">
        {data[0].level} level {data[0].school}
      </Text>
      <Text>
        <Text as="b">Casting Time</Text>: {data[0].casting_time}
      </Text>
      <Text>
        <Text as="b">Range</Text>: {data[0].range}
      </Text>
      <Text>
        <Text as="b">Components</Text>: {data[0].components} {data[0].material}
      </Text>
      <Text>
        <Text as="b">Duration</Text>: {data[0].duration}
      </Text>
      <Divider mb={2} mt={2} />
      <Text>{data[0].desc}</Text>
      <Text mt={2}>
        <Text as="b">At higher level</Text>.{data[0].higher_level}
      </Text>
      <Divider mb={2} mt={2} />
      <Text>
        <Text as="b">Class</Text>: {data[0].class}
      </Text>
      <Text>
        <Text as="b">Source</Text>: {data[0].page}
      </Text>
    </Box>
  );
}

export default SpellsInfo;
