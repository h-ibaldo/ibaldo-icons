import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpLeftSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpLeftSquare: ForwardRefExoticComponent<ArrowUpLeftSquareProps & RefAttributes<Svg>>;

export default ArrowUpLeftSquare;
export { ArrowUpLeftSquare };
