import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerClockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerClock: ForwardRefExoticComponent<PointerClockProps & RefAttributes<Svg>>;

export default PointerClock;
export { PointerClock };
