import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronDownLeftCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronDownLeftCircle: ForwardRefExoticComponent<ChevronDownLeftCircleProps & RefAttributes<Svg>>;

export default ChevronDownLeftCircle;
export { ChevronDownLeftCircle };
