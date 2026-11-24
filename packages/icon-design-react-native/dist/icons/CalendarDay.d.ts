import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarDayProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarDay: ForwardRefExoticComponent<CalendarDayProps & RefAttributes<Svg>>;

export default CalendarDay;
export { CalendarDay };
