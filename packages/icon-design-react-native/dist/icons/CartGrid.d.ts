import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CartGridProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CartGrid: ForwardRefExoticComponent<CartGridProps & RefAttributes<Svg>>;

export default CartGrid;
export { CartGrid };
