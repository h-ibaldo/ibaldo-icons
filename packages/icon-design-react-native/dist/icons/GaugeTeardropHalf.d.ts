import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeTeardropHalfProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeTeardropHalf: ForwardRefExoticComponent<GaugeTeardropHalfProps & RefAttributes<Svg>>;

export default GaugeTeardropHalf;
export { GaugeTeardropHalf };
