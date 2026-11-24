import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockFunnelProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockFunnel: ForwardRefExoticComponent<ClockFunnelProps & RefAttributes<Svg>>;

export default ClockFunnel;
export { ClockFunnel };
