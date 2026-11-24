import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareStackImageDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareStackImageDashed: ForwardRefExoticComponent<SquareStackImageDashedProps & RefAttributes<Svg>>;

export default SquareStackImageDashed;
export { SquareStackImageDashed };
