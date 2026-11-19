import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MenuBarCursorProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MenuBarCursor: ForwardRefExoticComponent<MenuBarCursorProps & RefAttributes<Svg>>;

export default MenuBarCursor;
export { MenuBarCursor };
