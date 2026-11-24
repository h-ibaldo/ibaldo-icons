import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ShapeUnevenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ShapeUneven: ForwardRefExoticComponent<ShapeUnevenProps & RefAttributes<Svg>>;

export default ShapeUneven;
export { ShapeUneven };
