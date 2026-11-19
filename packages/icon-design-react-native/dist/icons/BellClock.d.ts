import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellClockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellClock: ForwardRefExoticComponent<BellClockProps & RefAttributes<Svg>>;

export default BellClock;
export { BellClock };
