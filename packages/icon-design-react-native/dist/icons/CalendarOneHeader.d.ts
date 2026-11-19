import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarOneHeaderProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarOneHeader: ForwardRefExoticComponent<CalendarOneHeaderProps & RefAttributes<Svg>>;

export default CalendarOneHeader;
export { CalendarOneHeader };
