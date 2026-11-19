import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeTeardropCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeTeardropCurved: ForwardRefExoticComponent<GaugeTeardropCurvedProps & RefAttributes<Svg>>;

export default GaugeTeardropCurved;
export { GaugeTeardropCurved };
