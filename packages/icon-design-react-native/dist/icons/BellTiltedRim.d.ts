import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellTiltedRimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellTiltedRim: ForwardRefExoticComponent<BellTiltedRimProps & RefAttributes<Svg>>;

export default BellTiltedRim;
export { BellTiltedRim };
