import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckSquareStack2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckSquareStack2: ForwardRefExoticComponent<CheckSquareStack2Props & RefAttributes<Svg>>;

export default CheckSquareStack2;
export { CheckSquareStack2 };
