import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpDown: ForwardRefExoticComponent<ArrowUpDownProps & RefAttributes<Svg>>;

export default ArrowUpDown;
export { ArrowUpDown };
