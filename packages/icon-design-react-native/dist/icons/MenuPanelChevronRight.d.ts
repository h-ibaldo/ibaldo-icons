import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MenuPanelChevronRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MenuPanelChevronRight: ForwardRefExoticComponent<MenuPanelChevronRightProps & RefAttributes<Svg>>;

export default MenuPanelChevronRight;
export { MenuPanelChevronRight };
