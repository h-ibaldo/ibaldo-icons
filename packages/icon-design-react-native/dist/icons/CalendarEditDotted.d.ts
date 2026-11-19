import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarEditDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarEditDotted: ForwardRefExoticComponent<CalendarEditDottedProps & RefAttributes<Svg>>;

export default CalendarEditDotted;
export { CalendarEditDotted };
