import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCycle2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCycle2: ForwardRefExoticComponent<ArrowCycle2Props & RefAttributes<Svg>>;

export default ArrowCycle2;
export { ArrowCycle2 };
