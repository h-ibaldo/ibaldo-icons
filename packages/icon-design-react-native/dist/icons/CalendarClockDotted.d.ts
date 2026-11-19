import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarClockDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarClockDotted: ForwardRefExoticComponent<CalendarClockDottedProps & RefAttributes<Svg>>;

export default CalendarClockDotted;
export { CalendarClockDotted };
