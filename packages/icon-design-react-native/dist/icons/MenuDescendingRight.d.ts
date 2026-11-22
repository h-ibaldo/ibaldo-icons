import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MenuDescendingRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MenuDescendingRight: ForwardRefExoticComponent<MenuDescendingRightProps & RefAttributes<Svg>>;

export default MenuDescendingRight;
export { MenuDescendingRight };
