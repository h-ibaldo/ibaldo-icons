import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareColumnsTwoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareColumnsTwo: ForwardRefExoticComponent<SquareColumnsTwoProps & RefAttributes<Svg>>;

export default SquareColumnsTwo;
export { SquareColumnsTwo };
