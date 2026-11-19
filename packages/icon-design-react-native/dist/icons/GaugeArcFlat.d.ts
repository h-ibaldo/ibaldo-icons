import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeArcFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeArcFlat: ForwardRefExoticComponent<GaugeArcFlatProps & RefAttributes<Svg>>;

export default GaugeArcFlat;
export { GaugeArcFlat };
