import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Calendar: ForwardRefExoticComponent<CalendarProps & RefAttributes<Svg>>;

export default Calendar;
export { Calendar };
