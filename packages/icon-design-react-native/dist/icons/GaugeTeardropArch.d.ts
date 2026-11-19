import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeTeardropArchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeTeardropArch: ForwardRefExoticComponent<GaugeTeardropArchProps & RefAttributes<Svg>>;

export default GaugeTeardropArch;
export { GaugeTeardropArch };
