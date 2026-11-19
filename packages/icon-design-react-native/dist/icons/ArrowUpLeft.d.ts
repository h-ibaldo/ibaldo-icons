import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpLeft: ForwardRefExoticComponent<ArrowUpLeftProps & RefAttributes<Svg>>;

export default ArrowUpLeft;
export { ArrowUpLeft };
