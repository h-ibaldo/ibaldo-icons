import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarAlertCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarAlertCircle: ForwardRefExoticComponent<CalendarAlertCircleProps & RefAttributes<Svg>>;

export default CalendarAlertCircle;
export { CalendarAlertCircle };
