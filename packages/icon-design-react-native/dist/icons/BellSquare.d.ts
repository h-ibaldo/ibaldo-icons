import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellSquare: ForwardRefExoticComponent<BellSquareProps & RefAttributes<Svg>>;

export default BellSquare;
export { BellSquare };
