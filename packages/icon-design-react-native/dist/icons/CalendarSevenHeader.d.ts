import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarSevenHeaderProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarSevenHeader: ForwardRefExoticComponent<CalendarSevenHeaderProps & RefAttributes<Svg>>;

export default CalendarSevenHeader;
export { CalendarSevenHeader };
