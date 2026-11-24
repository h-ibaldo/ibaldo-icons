import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareCheckCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareCheckCircle: ForwardRefExoticComponent<SquareCheckCircleProps & RefAttributes<Svg>>;

export default SquareCheckCircle;
export { SquareCheckCircle };
