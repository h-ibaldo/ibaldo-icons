import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeDropDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeDropDashed: ForwardRefExoticComponent<GaugeDropDashedProps & RefAttributes<Svg>>;

export default GaugeDropDashed;
export { GaugeDropDashed };
