import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockDot: ForwardRefExoticComponent<ClockDotProps & RefAttributes<Svg>>;

export default ClockDot;
export { ClockDot };
