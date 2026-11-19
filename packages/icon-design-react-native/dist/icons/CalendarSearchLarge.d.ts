import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarSearchLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarSearchLarge: ForwardRefExoticComponent<CalendarSearchLargeProps & RefAttributes<Svg>>;

export default CalendarSearchLarge;
export { CalendarSearchLarge };
