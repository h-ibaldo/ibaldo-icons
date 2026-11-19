import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarOneProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarOne: ForwardRefExoticComponent<CalendarOneProps & RefAttributes<Svg>>;

export default CalendarOne;
export { CalendarOne };
