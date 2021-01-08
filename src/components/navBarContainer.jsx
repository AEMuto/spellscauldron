import React from 'react';
import { Flex } from '@chakra-ui/react';

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={4}
      bg={['white', 'white', 'white', 'white']}
      color={['primary.500', 'primary.500', 'primary.700', 'primary.700']}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBarContainer;
