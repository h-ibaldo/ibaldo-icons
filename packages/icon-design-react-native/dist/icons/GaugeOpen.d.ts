import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeOpenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeOpen: ForwardRefExoticComponent<GaugeOpenProps & RefAttributes<Svg>>;

export default GaugeOpen;
export { GaugeOpen };
