import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SkipBackCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SkipBackCircle: ForwardRefExoticComponent<SkipBackCircleProps & RefAttributes<Svg>>;

export default SkipBackCircle;
export { SkipBackCircle };
