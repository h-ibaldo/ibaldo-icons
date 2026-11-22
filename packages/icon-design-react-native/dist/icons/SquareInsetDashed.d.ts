import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareInsetDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareInsetDashed: ForwardRefExoticComponent<SquareInsetDashedProps & RefAttributes<Svg>>;

export default SquareInsetDashed;
export { SquareInsetDashed };
