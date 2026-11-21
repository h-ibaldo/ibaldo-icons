import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CartPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CartPlus: ForwardRefExoticComponent<CartPlusProps & RefAttributes<Svg>>;

export default CartPlus;
export { CartPlus };
