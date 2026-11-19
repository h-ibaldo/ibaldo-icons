import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MenuDashesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MenuDashes: ForwardRefExoticComponent<MenuDashesProps & RefAttributes<Svg>>;

export default MenuDashes;
export { MenuDashes };
