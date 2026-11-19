import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckSquareStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckSquareStack: ForwardRefExoticComponent<CheckSquareStackProps & RefAttributes<Svg>>;

export default CheckSquareStack;
export { CheckSquareStack };
