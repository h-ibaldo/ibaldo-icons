import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CartArrowDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CartArrowDown: ForwardRefExoticComponent<CartArrowDownProps & RefAttributes<Svg>>;

export default CartArrowDown;
export { CartArrowDown };
