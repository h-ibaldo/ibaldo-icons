import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeTicksHalfProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeTicksHalf: ForwardRefExoticComponent<GaugeTicksHalfProps & RefAttributes<Svg>>;

export default GaugeTicksHalf;
export { GaugeTicksHalf };
