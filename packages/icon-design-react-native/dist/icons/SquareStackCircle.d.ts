import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareStackCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareStackCircle: ForwardRefExoticComponent<SquareStackCircleProps & RefAttributes<Svg>>;

export default SquareStackCircle;
export { SquareStackCircle };
