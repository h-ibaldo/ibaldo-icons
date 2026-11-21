import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CartMinusRailProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CartMinusRail: ForwardRefExoticComponent<CartMinusRailProps & RefAttributes<Svg>>;

export default CartMinusRail;
export { CartMinusRail };
