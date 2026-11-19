import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Gauge: ForwardRefExoticComponent<GaugeProps & RefAttributes<Svg>>;

export default Gauge;
export { Gauge };
