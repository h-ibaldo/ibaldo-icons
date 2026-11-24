import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PercentCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PercentCircle: ForwardRefExoticComponent<PercentCircleProps & RefAttributes<Svg>>;

export default PercentCircle;
export { PercentCircle };
