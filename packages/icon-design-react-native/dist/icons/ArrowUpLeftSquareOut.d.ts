import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpLeftSquareOutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpLeftSquareOut: ForwardRefExoticComponent<ArrowUpLeftSquareOutProps & RefAttributes<Svg>>;

export default ArrowUpLeftSquareOut;
export { ArrowUpLeftSquareOut };
