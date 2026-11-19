import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MenuTightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MenuTight: ForwardRefExoticComponent<MenuTightProps & RefAttributes<Svg>>;

export default MenuTight;
export { MenuTight };
