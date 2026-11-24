import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareStackPlusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareStackPlusCircle: ForwardRefExoticComponent<SquareStackPlusCircleProps & RefAttributes<Svg>>;

export default SquareStackPlusCircle;
export { SquareStackPlusCircle };
