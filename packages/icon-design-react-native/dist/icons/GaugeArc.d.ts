import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeArcProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeArc: ForwardRefExoticComponent<GaugeArcProps & RefAttributes<Svg>>;

export default GaugeArc;
export { GaugeArc };
