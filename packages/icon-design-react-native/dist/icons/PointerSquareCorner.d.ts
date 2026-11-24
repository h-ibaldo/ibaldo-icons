import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerSquareCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerSquareCorner: ForwardRefExoticComponent<PointerSquareCornerProps & RefAttributes<Svg>>;

export default PointerSquareCorner;
export { PointerSquareCorner };
