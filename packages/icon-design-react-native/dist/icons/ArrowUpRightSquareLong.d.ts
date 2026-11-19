import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpRightSquareLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpRightSquareLong: ForwardRefExoticComponent<ArrowUpRightSquareLongProps & RefAttributes<Svg>>;

export default ArrowUpRightSquareLong;
export { ArrowUpRightSquareLong };
