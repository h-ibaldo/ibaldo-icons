import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarEditCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarEditCorner: ForwardRefExoticComponent<CalendarEditCornerProps & RefAttributes<Svg>>;

export default CalendarEditCorner;
export { CalendarEditCorner };
