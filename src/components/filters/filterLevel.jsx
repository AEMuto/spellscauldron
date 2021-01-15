import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';
import React from 'react';

function filterLevel(props) {
  return (
    <Slider
      aria-label="slider-ex-5"
      min={0}
      max={9}
      step={1}
      onChangeEnd={val => console.log(val)}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
}

export default filterLevel;
