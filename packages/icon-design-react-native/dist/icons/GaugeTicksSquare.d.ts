import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeTicksSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeTicksSquare: ForwardRefExoticComponent<GaugeTicksSquareProps & RefAttributes<Svg>>;

export default GaugeTicksSquare;
export { GaugeTicksSquare };
