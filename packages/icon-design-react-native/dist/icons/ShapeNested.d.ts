import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ShapeNestedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ShapeNested: ForwardRefExoticComponent<ShapeNestedProps & RefAttributes<Svg>>;

export default ShapeNested;
export { ShapeNested };
