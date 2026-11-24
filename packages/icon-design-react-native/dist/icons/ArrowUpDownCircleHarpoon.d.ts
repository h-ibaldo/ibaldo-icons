import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpDownCircleHarpoonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpDownCircleHarpoon: ForwardRefExoticComponent<ArrowUpDownCircleHarpoonProps & RefAttributes<Svg>>;

export default ArrowUpDownCircleHarpoon;
export { ArrowUpDownCircleHarpoon };
