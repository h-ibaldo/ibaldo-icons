import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CartSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CartSmall: ForwardRefExoticComponent<CartSmallProps & RefAttributes<Svg>>;

export default CartSmall;
export { CartSmall };
