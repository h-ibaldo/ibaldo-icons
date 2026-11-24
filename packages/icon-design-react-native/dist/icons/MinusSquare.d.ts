import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MinusSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MinusSquare: ForwardRefExoticComponent<MinusSquareProps & RefAttributes<Svg>>;

export default MinusSquare;
export { MinusSquare };
