import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeArchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeArch: ForwardRefExoticComponent<GaugeArchProps & RefAttributes<Svg>>;

export default GaugeArch;
export { GaugeArch };
