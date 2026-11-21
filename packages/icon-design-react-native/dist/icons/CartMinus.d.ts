import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CartMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CartMinus: ForwardRefExoticComponent<CartMinusProps & RefAttributes<Svg>>;

export default CartMinus;
export { CartMinus };
