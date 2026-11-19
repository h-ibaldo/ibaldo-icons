import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowConvergeLeftCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowConvergeLeftCircle: ForwardRefExoticComponent<ArrowConvergeLeftCircleProps & RefAttributes<Svg>>;

export default ArrowConvergeLeftCircle;
export { ArrowConvergeLeftCircle };
