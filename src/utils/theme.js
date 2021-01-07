import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: {
    50: '#f8e9ff',
    100: '#ddc1f3',
    200: '#c298e7',
    300: '#a671dc',
    400: '#8748d0',
    500: '#772fb7',
    600: '#63248f',
    700: '#4d1968',
    800: '#330f40',
    900: '#17031a',
  },
};

const customTheme = extendTheme({ colors });

export default customTheme;
