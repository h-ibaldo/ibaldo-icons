import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareStackSquareDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareStackSquareDashed: ForwardRefExoticComponent<SquareStackSquareDashedProps & RefAttributes<Svg>>;

export default SquareStackSquareDashed;
export { SquareStackSquareDashed };
