import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpLeftSquareLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpLeftSquareLong: ForwardRefExoticComponent<ArrowUpLeftSquareLongProps & RefAttributes<Svg>>;

export default ArrowUpLeftSquareLong;
export { ArrowUpLeftSquareLong };
