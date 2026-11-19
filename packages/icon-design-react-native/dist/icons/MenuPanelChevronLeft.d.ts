import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MenuPanelChevronLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MenuPanelChevronLeft: ForwardRefExoticComponent<MenuPanelChevronLeftProps & RefAttributes<Svg>>;

export default MenuPanelChevronLeft;
export { MenuPanelChevronLeft };
