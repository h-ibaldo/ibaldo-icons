import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarDotsCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarDotsCircle: ForwardRefExoticComponent<CalendarDotsCircleProps & RefAttributes<Svg>>;

export default CalendarDotsCircle;
export { CalendarDotsCircle };
