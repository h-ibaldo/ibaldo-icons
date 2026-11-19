import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellClockFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellClockFlat: ForwardRefExoticComponent<BellClockFlatProps & RefAttributes<Svg>>;

export default BellClockFlat;
export { BellClockFlat };
