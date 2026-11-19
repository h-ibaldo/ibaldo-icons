import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowLeftRightCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowLeftRightCircle: ForwardRefExoticComponent<ArrowLeftRightCircleProps & RefAttributes<Svg>>;

export default ArrowLeftRightCircle;
export { ArrowLeftRightCircle };
