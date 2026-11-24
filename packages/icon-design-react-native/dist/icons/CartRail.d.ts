import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CartRailProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CartRail: ForwardRefExoticComponent<CartRailProps & RefAttributes<Svg>>;

export default CartRail;
export { CartRail };
