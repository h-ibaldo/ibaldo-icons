import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronLeftCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronLeftCircle: ForwardRefExoticComponent<ChevronLeftCircleProps & RefAttributes<Svg>>;

export default ChevronLeftCircle;
export { ChevronLeftCircle };
