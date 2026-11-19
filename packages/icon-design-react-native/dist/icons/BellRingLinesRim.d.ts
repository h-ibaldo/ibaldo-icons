import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellRingLinesRimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellRingLinesRim: ForwardRefExoticComponent<BellRingLinesRimProps & RefAttributes<Svg>>;

export default BellRingLinesRim;
export { BellRingLinesRim };
