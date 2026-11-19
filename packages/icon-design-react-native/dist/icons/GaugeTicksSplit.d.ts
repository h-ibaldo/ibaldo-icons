import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeTicksSplitProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeTicksSplit: ForwardRefExoticComponent<GaugeTicksSplitProps & RefAttributes<Svg>>;

export default GaugeTicksSplit;
export { GaugeTicksSplit };
