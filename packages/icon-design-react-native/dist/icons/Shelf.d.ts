import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ShelfProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Shelf: ForwardRefExoticComponent<ShelfProps & RefAttributes<Svg>>;

export default Shelf;
export { Shelf };
