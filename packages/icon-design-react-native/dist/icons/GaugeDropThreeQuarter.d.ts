import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeDropThreeQuarterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeDropThreeQuarter: ForwardRefExoticComponent<GaugeDropThreeQuarterProps & RefAttributes<Svg>>;

export default GaugeDropThreeQuarter;
export { GaugeDropThreeQuarter };
