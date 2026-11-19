import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MenuLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MenuLarge: ForwardRefExoticComponent<MenuLargeProps & RefAttributes<Svg>>;

export default MenuLarge;
export { MenuLarge };
