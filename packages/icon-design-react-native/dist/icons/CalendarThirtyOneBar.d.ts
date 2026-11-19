import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarThirtyOneBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarThirtyOneBar: ForwardRefExoticComponent<CalendarThirtyOneBarProps & RefAttributes<Svg>>;

export default CalendarThirtyOneBar;
export { CalendarThirtyOneBar };
