import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BurstDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BurstDotted: ForwardRefExoticComponent<BurstDottedProps & RefAttributes<Svg>>;

export default BurstDotted;
export { BurstDotted };
