import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassSquare: ForwardRefExoticComponent<HourglassSquareProps & RefAttributes<Svg>>;

export default HourglassSquare;
export { HourglassSquare };
