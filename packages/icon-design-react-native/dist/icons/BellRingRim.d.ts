import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellRingRimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellRingRim: ForwardRefExoticComponent<BellRingRimProps & RefAttributes<Svg>>;

export default BellRingRim;
export { BellRingRim };
