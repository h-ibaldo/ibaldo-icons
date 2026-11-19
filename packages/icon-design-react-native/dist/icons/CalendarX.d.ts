import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarX: ForwardRefExoticComponent<CalendarXProps & RefAttributes<Svg>>;

export default CalendarX;
export { CalendarX };
