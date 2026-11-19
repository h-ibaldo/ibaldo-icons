import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarAlertProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarAlert: ForwardRefExoticComponent<CalendarAlertProps & RefAttributes<Svg>>;

export default CalendarAlert;
export { CalendarAlert };
