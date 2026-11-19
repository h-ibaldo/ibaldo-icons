import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MenuListColumnsSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MenuListColumnsSquare: ForwardRefExoticComponent<MenuListColumnsSquareProps & RefAttributes<Svg>>;

export default MenuListColumnsSquare;
export { MenuListColumnsSquare };
