import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowLeftFromPointCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowLeftFromPointCircle: ForwardRefExoticComponent<ArrowLeftFromPointCircleProps & RefAttributes<Svg>>;

export default ArrowLeftFromPointCircle;
export { ArrowLeftFromPointCircle };
