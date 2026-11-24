import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeTeardropDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeTeardropDashed: ForwardRefExoticComponent<GaugeTeardropDashedProps & RefAttributes<Svg>>;

export default GaugeTeardropDashed;
export { GaugeTeardropDashed };
