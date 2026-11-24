import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MenuSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MenuSquare: ForwardRefExoticComponent<MenuSquareProps & RefAttributes<Svg>>;

export default MenuSquare;
export { MenuSquare };
