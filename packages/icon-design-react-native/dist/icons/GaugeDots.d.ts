import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeDots: ForwardRefExoticComponent<GaugeDotsProps & RefAttributes<Svg>>;

export default GaugeDots;
export { GaugeDots };
