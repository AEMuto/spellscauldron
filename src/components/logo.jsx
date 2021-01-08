import React from 'react';
import { Image, HStack, Heading, Divider } from '@chakra-ui/react';
import logo from '../utils/logo.svg';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export default function Logo(props) {
  return (
    <HStack spacing={5} {...props}>
      <Image src={logo} boxSize="40px" {...props} />
      <Heading as="h1" size="md">
        Spells Cauldron
      </Heading>

      <ColorModeSwitcher />
    </HStack>
  );
}
