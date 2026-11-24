import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpLeftSquareInProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpLeftSquareIn: ForwardRefExoticComponent<ArrowUpLeftSquareInProps & RefAttributes<Svg>>;

export default ArrowUpLeftSquareIn;
export { ArrowUpLeftSquareIn };
