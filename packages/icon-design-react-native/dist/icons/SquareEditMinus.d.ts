import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareEditMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareEditMinus: ForwardRefExoticComponent<SquareEditMinusProps & RefAttributes<Svg>>;

export default SquareEditMinus;
export { SquareEditMinus };
