import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeArcHalfProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeArcHalf: ForwardRefExoticComponent<GaugeArcHalfProps & RefAttributes<Svg>>;

export default GaugeArcHalf;
export { GaugeArcHalf };
