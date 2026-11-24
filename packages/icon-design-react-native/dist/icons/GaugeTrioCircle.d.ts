import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeTrioCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeTrioCircle: ForwardRefExoticComponent<GaugeTrioCircleProps & RefAttributes<Svg>>;

export default GaugeTrioCircle;
export { GaugeTrioCircle };
