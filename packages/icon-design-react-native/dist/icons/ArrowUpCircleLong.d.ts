import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpCircleLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpCircleLong: ForwardRefExoticComponent<ArrowUpCircleLongProps & RefAttributes<Svg>>;

export default ArrowUpCircleLong;
export { ArrowUpCircleLong };
