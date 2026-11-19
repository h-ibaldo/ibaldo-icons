import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockDotted: ForwardRefExoticComponent<ClockDottedProps & RefAttributes<Svg>>;

export default ClockDotted;
export { ClockDotted };
