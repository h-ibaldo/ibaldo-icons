import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckSquareStackShadowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckSquareStackShadow: ForwardRefExoticComponent<CheckSquareStackShadowProps & RefAttributes<Svg>>;

export default CheckSquareStackShadow;
export { CheckSquareStackShadow };
