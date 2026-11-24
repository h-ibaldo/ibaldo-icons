import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeTicksFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeTicksFlat: ForwardRefExoticComponent<GaugeTicksFlatProps & RefAttributes<Svg>>;

export default GaugeTicksFlat;
export { GaugeTicksFlat };
