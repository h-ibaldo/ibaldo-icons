import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MenuNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MenuNarrow: ForwardRefExoticComponent<MenuNarrowProps & RefAttributes<Svg>>;

export default MenuNarrow;
export { MenuNarrow };
