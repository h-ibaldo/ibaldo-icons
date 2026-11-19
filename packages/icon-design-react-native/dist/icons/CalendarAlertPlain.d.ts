import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarAlertPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarAlertPlain: ForwardRefExoticComponent<CalendarAlertPlainProps & RefAttributes<Svg>>;

export default CalendarAlertPlain;
export { CalendarAlertPlain };
