import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockTurnRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockTurnRight: ForwardRefExoticComponent<ClockTurnRightProps & RefAttributes<Svg>>;

export default ClockTurnRight;
export { ClockTurnRight };
