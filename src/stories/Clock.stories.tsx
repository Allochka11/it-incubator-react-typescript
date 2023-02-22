import React from 'react';
import {Clock} from "../components/Clock/Clock";

export default {
    title: 'Clock',
    component: Clock
}

export const BaseExampleAnalogClock = () => {
  return <Clock mode={'analog'}/>
}
export const BaseExampleDigitalClock = () => {
  return <Clock mode={'digital'}/>
}