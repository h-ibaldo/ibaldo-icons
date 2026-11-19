import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeDropProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeDrop: ForwardRefExoticComponent<GaugeDropProps & RefAttributes<Svg>>;

export default GaugeDrop;
export { GaugeDrop };
