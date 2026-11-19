import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MenuGridSquaresSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MenuGridSquaresSmall: ForwardRefExoticComponent<MenuGridSquaresSmallProps & RefAttributes<Svg>>;

export default MenuGridSquaresSmall;
export { MenuGridSquaresSmall };
