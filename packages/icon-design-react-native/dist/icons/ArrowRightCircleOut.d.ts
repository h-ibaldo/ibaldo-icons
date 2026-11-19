import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRightCircleOutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRightCircleOut: ForwardRefExoticComponent<ArrowRightCircleOutProps & RefAttributes<Svg>>;

export default ArrowRightCircleOut;
export { ArrowRightCircleOut };
