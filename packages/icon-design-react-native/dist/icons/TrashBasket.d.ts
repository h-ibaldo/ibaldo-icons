import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashBasketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashBasket: ForwardRefExoticComponent<TrashBasketProps & RefAttributes<Svg>>;

export default TrashBasket;
export { TrashBasket };
