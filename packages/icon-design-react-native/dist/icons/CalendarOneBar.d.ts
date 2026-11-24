import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarOneBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarOneBar: ForwardRefExoticComponent<CalendarOneBarProps & RefAttributes<Svg>>;

export default CalendarOneBar;
export { CalendarOneBar };
