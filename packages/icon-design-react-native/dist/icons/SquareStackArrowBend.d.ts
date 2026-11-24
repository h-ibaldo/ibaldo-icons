import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareStackArrowBendProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareStackArrowBend: ForwardRefExoticComponent<SquareStackArrowBendProps & RefAttributes<Svg>>;

export default SquareStackArrowBend;
export { SquareStackArrowBend };
