import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeCheckThreeQuarterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeCheckThreeQuarter: ForwardRefExoticComponent<GaugeCheckThreeQuarterProps & RefAttributes<Svg>>;

export default GaugeCheckThreeQuarter;
export { GaugeCheckThreeQuarter };
