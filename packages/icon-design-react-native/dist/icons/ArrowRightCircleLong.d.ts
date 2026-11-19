import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRightCircleLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRightCircleLong: ForwardRefExoticComponent<ArrowRightCircleLongProps & RefAttributes<Svg>>;

export default ArrowRightCircleLong;
export { ArrowRightCircleLong };
