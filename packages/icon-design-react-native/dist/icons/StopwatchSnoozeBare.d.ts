import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchSnoozeBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchSnoozeBare: ForwardRefExoticComponent<StopwatchSnoozeBareProps & RefAttributes<Svg>>;

export default StopwatchSnoozeBare;
export { StopwatchSnoozeBare };
