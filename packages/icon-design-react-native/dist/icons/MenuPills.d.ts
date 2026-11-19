import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MenuPillsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MenuPills: ForwardRefExoticComponent<MenuPillsProps & RefAttributes<Svg>>;

export default MenuPills;
export { MenuPills };
