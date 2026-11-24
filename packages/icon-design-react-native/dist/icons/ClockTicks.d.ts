import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockTicksProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockTicks: ForwardRefExoticComponent<ClockTicksProps & RefAttributes<Svg>>;

export default ClockTicks;
export { ClockTicks };
