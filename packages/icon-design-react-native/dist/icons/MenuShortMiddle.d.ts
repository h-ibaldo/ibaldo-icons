import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MenuShortMiddleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MenuShortMiddle: ForwardRefExoticComponent<MenuShortMiddleProps & RefAttributes<Svg>>;

export default MenuShortMiddle;
export { MenuShortMiddle };
