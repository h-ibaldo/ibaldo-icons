import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MenuCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MenuCircle: ForwardRefExoticComponent<MenuCircleProps & RefAttributes<Svg>>;

export default MenuCircle;
export { MenuCircle };
