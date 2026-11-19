import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowConvergeDownLeftCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowConvergeDownLeftCircle: ForwardRefExoticComponent<ArrowConvergeDownLeftCircleProps & RefAttributes<Svg>>;

export default ArrowConvergeDownLeftCircle;
export { ArrowConvergeDownLeftCircle };
