import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeTicksDropProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeTicksDrop: ForwardRefExoticComponent<GaugeTicksDropProps & RefAttributes<Svg>>;

export default GaugeTicksDrop;
export { GaugeTicksDrop };
