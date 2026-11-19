import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BasketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Basket: ForwardRefExoticComponent<BasketProps & RefAttributes<Svg>>;

export default Basket;
export { Basket };
