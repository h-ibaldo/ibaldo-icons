import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareStack: ForwardRefExoticComponent<SquareStackProps & RefAttributes<Svg>>;

export default SquareStack;
export { SquareStack };
