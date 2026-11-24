import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownFromPointCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownFromPointCircle: ForwardRefExoticComponent<ArrowDownFromPointCircleProps & RefAttributes<Svg>>;

export default ArrowDownFromPointCircle;
export { ArrowDownFromPointCircle };
