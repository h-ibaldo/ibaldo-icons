import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarCheck: ForwardRefExoticComponent<CalendarCheckProps & RefAttributes<Svg>>;

export default CalendarCheck;
export { CalendarCheck };
