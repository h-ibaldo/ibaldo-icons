import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareStackPlusCircleShadowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareStackPlusCircleShadow: ForwardRefExoticComponent<SquareStackPlusCircleShadowProps & RefAttributes<Svg>>;

export default SquareStackPlusCircleShadow;
export { SquareStackPlusCircleShadow };
