import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TimerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Timer: ForwardRefExoticComponent<TimerProps & RefAttributes<Svg>>;

export default Timer;
export { Timer };
