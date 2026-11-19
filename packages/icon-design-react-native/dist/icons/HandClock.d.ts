import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandClockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandClock: ForwardRefExoticComponent<HandClockProps & RefAttributes<Svg>>;

export default HandClock;
export { HandClock };
