import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DivideSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DivideSquare: ForwardRefExoticComponent<DivideSquareProps & RefAttributes<Svg>>;

export default DivideSquare;
export { DivideSquare };
