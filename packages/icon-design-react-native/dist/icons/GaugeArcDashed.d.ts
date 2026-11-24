import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeArcDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeArcDashed: ForwardRefExoticComponent<GaugeArcDashedProps & RefAttributes<Svg>>;

export default GaugeArcDashed;
export { GaugeArcDashed };
