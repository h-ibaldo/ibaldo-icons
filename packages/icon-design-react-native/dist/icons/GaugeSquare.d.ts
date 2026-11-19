import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeSquare: ForwardRefExoticComponent<GaugeSquareProps & RefAttributes<Svg>>;

export default GaugeSquare;
export { GaugeSquare };
