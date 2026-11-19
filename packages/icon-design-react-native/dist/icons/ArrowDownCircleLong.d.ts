import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownCircleLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownCircleLong: ForwardRefExoticComponent<ArrowDownCircleLongProps & RefAttributes<Svg>>;

export default ArrowDownCircleLong;
export { ArrowDownCircleLong };
