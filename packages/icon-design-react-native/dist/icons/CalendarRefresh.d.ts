import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarRefreshProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarRefresh: ForwardRefExoticComponent<CalendarRefreshProps & RefAttributes<Svg>>;

export default CalendarRefresh;
export { CalendarRefresh };
