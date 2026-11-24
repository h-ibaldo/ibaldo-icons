import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NotEqualCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NotEqualCircle: ForwardRefExoticComponent<NotEqualCircleProps & RefAttributes<Svg>>;

export default NotEqualCircle;
export { NotEqualCircle };
