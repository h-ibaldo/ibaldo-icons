import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MenuCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MenuCompact: ForwardRefExoticComponent<MenuCompactProps & RefAttributes<Svg>>;

export default MenuCompact;
export { MenuCompact };
