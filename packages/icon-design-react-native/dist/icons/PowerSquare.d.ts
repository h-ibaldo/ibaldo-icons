import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PowerSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PowerSquare: ForwardRefExoticComponent<PowerSquareProps & RefAttributes<Svg>>;

export default PowerSquare;
export { PowerSquare };
