import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MenuProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Menu: ForwardRefExoticComponent<MenuProps & RefAttributes<Svg>>;

export default Menu;
export { Menu };
