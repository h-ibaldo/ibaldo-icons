import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRightFromPointCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRightFromPointCircle: ForwardRefExoticComponent<ArrowRightFromPointCircleProps & RefAttributes<Svg>>;

export default ArrowRightFromPointCircle;
export { ArrowRightFromPointCircle };
