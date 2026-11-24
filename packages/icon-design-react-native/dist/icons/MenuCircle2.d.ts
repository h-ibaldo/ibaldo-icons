import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MenuCircle2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MenuCircle2: ForwardRefExoticComponent<MenuCircle2Props & RefAttributes<Svg>>;

export default MenuCircle2;
export { MenuCircle2 };
