import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeArcSemicircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeArcSemicircle: ForwardRefExoticComponent<GaugeArcSemicircleProps & RefAttributes<Svg>>;

export default GaugeArcSemicircle;
export { GaugeArcSemicircle };
