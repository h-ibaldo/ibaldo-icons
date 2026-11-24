import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NotApproximateSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NotApproximateSquare: ForwardRefExoticComponent<NotApproximateSquareProps & RefAttributes<Svg>>;

export default NotApproximateSquare;
export { NotApproximateSquare };
