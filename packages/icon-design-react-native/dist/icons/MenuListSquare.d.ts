import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MenuListSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MenuListSquare: ForwardRefExoticComponent<MenuListSquareProps & RefAttributes<Svg>>;

export default MenuListSquare;
export { MenuListSquare };
