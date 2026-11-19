import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeTicksDotsSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeTicksDotsSquare: ForwardRefExoticComponent<GaugeTicksDotsSquareProps & RefAttributes<Svg>>;

export default GaugeTicksDotsSquare;
export { GaugeTicksDotsSquare };
