import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtClockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtClock: ForwardRefExoticComponent<AtClockProps & RefAttributes<Svg>>;

export default AtClock;
export { AtClock };
