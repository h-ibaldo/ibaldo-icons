import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SkipForwardDoubleCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SkipForwardDoubleCircle: ForwardRefExoticComponent<SkipForwardDoubleCircleProps & RefAttributes<Svg>>;

export default SkipForwardDoubleCircle;
export { SkipForwardDoubleCircle };
