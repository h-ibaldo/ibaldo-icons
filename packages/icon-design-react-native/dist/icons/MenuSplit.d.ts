import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MenuSplitProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MenuSplit: ForwardRefExoticComponent<MenuSplitProps & RefAttributes<Svg>>;

export default MenuSplit;
export { MenuSplit };
