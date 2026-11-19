import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeTicksDenseDropProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeTicksDenseDrop: ForwardRefExoticComponent<GaugeTicksDenseDropProps & RefAttributes<Svg>>;

export default GaugeTicksDenseDrop;
export { GaugeTicksDenseDrop };
