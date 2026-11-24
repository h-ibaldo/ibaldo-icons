import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellClockRimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellClockRim: ForwardRefExoticComponent<BellClockRimProps & RefAttributes<Svg>>;

export default BellClockRim;
export { BellClockRim };
