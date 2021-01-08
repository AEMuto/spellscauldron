import React from 'react';
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Box,
  Center,
  Circle,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const iconColor = useColorModeValue('#1A202C', 'white');
  const circleBg = useColorModeValue('primary.200', 'primary.500');

  return (
    <Circle bg={circleBg} size="10">
      <IconButton
        size="xl"
        fontSize="xl"
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        color={iconColor}
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
      />
    </Circle>
  );
};
