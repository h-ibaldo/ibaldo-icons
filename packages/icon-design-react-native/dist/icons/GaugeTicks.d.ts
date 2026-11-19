import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeTicksProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeTicks: ForwardRefExoticComponent<GaugeTicksProps & RefAttributes<Svg>>;

export default GaugeTicks;
export { GaugeTicks };
