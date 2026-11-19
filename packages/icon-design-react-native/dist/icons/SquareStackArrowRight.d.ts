import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareStackArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareStackArrowRight: ForwardRefExoticComponent<SquareStackArrowRightProps & RefAttributes<Svg>>;

export default SquareStackArrowRight;
export { SquareStackArrowRight };
