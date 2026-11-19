import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MenuTwoLinesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MenuTwoLines: ForwardRefExoticComponent<MenuTwoLinesProps & RefAttributes<Svg>>;

export default MenuTwoLines;
export { MenuTwoLines };
