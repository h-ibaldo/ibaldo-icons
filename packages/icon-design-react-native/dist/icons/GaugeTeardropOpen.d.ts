import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeTeardropOpenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeTeardropOpen: ForwardRefExoticComponent<GaugeTeardropOpenProps & RefAttributes<Svg>>;

export default GaugeTeardropOpen;
export { GaugeTeardropOpen };
