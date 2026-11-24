import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PowerOffSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PowerOffSquare: ForwardRefExoticComponent<PowerOffSquareProps & RefAttributes<Svg>>;

export default PowerOffSquare;
export { PowerOffSquare };
