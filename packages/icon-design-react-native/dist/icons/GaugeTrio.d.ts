import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeTrioProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeTrio: ForwardRefExoticComponent<GaugeTrioProps & RefAttributes<Svg>>;

export default GaugeTrio;
export { GaugeTrio };
