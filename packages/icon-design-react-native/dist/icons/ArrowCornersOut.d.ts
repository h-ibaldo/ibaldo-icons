import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCornersOutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCornersOut: ForwardRefExoticComponent<ArrowCornersOutProps & RefAttributes<Svg>>;

export default ArrowCornersOut;
export { ArrowCornersOut };
