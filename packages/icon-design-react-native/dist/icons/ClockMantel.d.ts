import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockMantelProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockMantel: ForwardRefExoticComponent<ClockMantelProps & RefAttributes<Svg>>;

export default ClockMantel;
export { ClockMantel };
