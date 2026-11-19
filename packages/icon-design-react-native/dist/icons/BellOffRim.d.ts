import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellOffRimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellOffRim: ForwardRefExoticComponent<BellOffRimProps & RefAttributes<Svg>>;

export default BellOffRim;
export { BellOffRim };
