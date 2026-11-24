import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareStackLinesDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareStackLinesDashed: ForwardRefExoticComponent<SquareStackLinesDashedProps & RefAttributes<Svg>>;

export default SquareStackLinesDashed;
export { SquareStackLinesDashed };
