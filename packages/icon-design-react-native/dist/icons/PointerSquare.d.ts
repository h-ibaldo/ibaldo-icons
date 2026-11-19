import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerSquare: ForwardRefExoticComponent<PointerSquareProps & RefAttributes<Svg>>;

export default PointerSquare;
export { PointerSquare };
