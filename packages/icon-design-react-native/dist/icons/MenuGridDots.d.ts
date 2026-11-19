import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MenuGridDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MenuGridDots: ForwardRefExoticComponent<MenuGridDotsProps & RefAttributes<Svg>>;

export default MenuGridDots;
export { MenuGridDots };
