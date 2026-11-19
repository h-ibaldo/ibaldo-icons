import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MenuPentagonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MenuPentagon: ForwardRefExoticComponent<MenuPentagonProps & RefAttributes<Svg>>;

export default MenuPentagon;
export { MenuPentagon };
