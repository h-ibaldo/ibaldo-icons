import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeFlat: ForwardRefExoticComponent<GaugeFlatProps & RefAttributes<Svg>>;

export default GaugeFlat;
export { GaugeFlat };
