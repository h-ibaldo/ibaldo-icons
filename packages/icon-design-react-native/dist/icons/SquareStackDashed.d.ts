import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareStackDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareStackDashed: ForwardRefExoticComponent<SquareStackDashedProps & RefAttributes<Svg>>;

export default SquareStackDashed;
export { SquareStackDashed };
