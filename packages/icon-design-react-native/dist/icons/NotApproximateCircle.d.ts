import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NotApproximateCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NotApproximateCircle: ForwardRefExoticComponent<NotApproximateCircleProps & RefAttributes<Svg>>;

export default NotApproximateCircle;
export { NotApproximateCircle };
