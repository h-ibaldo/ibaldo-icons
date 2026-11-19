import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockTurnLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockTurnLeft: ForwardRefExoticComponent<ClockTurnLeftProps & RefAttributes<Svg>>;

export default ClockTurnLeft;
export { ClockTurnLeft };
