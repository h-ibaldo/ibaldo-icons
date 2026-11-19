import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRightFromDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRightFromDot: ForwardRefExoticComponent<ArrowRightFromDotProps & RefAttributes<Svg>>;

export default ArrowRightFromDot;
export { ArrowRightFromDot };
