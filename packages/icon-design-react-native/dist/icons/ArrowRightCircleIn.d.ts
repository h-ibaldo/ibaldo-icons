import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRightCircleInProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRightCircleIn: ForwardRefExoticComponent<ArrowRightCircleInProps & RefAttributes<Svg>>;

export default ArrowRightCircleIn;
export { ArrowRightCircleIn };
