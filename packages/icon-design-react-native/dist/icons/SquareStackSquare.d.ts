import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareStackSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareStackSquare: ForwardRefExoticComponent<SquareStackSquareProps & RefAttributes<Svg>>;

export default SquareStackSquare;
export { SquareStackSquare };
