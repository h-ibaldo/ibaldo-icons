import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarSearchHeaderProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarSearchHeader: ForwardRefExoticComponent<CalendarSearchHeaderProps & RefAttributes<Svg>>;

export default CalendarSearchHeader;
export { CalendarSearchHeader };
