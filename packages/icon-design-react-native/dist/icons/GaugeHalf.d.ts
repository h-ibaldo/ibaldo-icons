import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeHalfProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeHalf: ForwardRefExoticComponent<GaugeHalfProps & RefAttributes<Svg>>;

export default GaugeHalf;
export { GaugeHalf };
