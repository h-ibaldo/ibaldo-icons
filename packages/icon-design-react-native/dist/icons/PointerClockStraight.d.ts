import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerClockStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerClockStraight: ForwardRefExoticComponent<PointerClockStraightProps & RefAttributes<Svg>>;

export default PointerClockStraight;
export { PointerClockStraight };
