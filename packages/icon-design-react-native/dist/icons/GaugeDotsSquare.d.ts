import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeDotsSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeDotsSquare: ForwardRefExoticComponent<GaugeDotsSquareProps & RefAttributes<Svg>>;

export default GaugeDotsSquare;
export { GaugeDotsSquare };
