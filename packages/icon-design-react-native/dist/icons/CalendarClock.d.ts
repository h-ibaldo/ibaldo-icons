import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarClockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarClock: ForwardRefExoticComponent<CalendarClockProps & RefAttributes<Svg>>;

export default CalendarClock;
export { CalendarClock };
