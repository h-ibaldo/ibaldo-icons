import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowLeftFromDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowLeftFromDot: ForwardRefExoticComponent<ArrowLeftFromDotProps & RefAttributes<Svg>>;

export default ArrowLeftFromDot;
export { ArrowLeftFromDot };
