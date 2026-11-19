import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SkipBackDoubleCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SkipBackDoubleCircle: ForwardRefExoticComponent<SkipBackDoubleCircleProps & RefAttributes<Svg>>;

export default SkipBackDoubleCircle;
export { SkipBackDoubleCircle };
