import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowLeftCircleLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowLeftCircleLong: ForwardRefExoticComponent<ArrowLeftCircleLongProps & RefAttributes<Svg>>;

export default ArrowLeftCircleLong;
export { ArrowLeftCircleLong };
