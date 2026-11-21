import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CartCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CartCheck: ForwardRefExoticComponent<CartCheckProps & RefAttributes<Svg>>;

export default CartCheck;
export { CartCheck };
