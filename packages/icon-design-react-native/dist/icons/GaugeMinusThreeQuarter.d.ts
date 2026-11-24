import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeMinusThreeQuarterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeMinusThreeQuarter: ForwardRefExoticComponent<GaugeMinusThreeQuarterProps & RefAttributes<Svg>>;

export default GaugeMinusThreeQuarter;
export { GaugeMinusThreeQuarter };
