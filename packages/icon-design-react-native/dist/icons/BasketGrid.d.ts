import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BasketGridProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BasketGrid: ForwardRefExoticComponent<BasketGridProps & RefAttributes<Svg>>;

export default BasketGrid;
export { BasketGrid };
