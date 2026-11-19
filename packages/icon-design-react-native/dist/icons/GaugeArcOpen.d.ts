import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeArcOpenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeArcOpen: ForwardRefExoticComponent<GaugeArcOpenProps & RefAttributes<Svg>>;

export default GaugeArcOpen;
export { GaugeArcOpen };
