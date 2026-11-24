import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MenuDescendingWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MenuDescendingWide: ForwardRefExoticComponent<MenuDescendingWideProps & RefAttributes<Svg>>;

export default MenuDescendingWide;
export { MenuDescendingWide };
