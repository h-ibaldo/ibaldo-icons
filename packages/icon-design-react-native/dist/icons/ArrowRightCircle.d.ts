import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRightCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRightCircle: ForwardRefExoticComponent<ArrowRightCircleProps & RefAttributes<Svg>>;

export default ArrowRightCircle;
export { ArrowRightCircle };
