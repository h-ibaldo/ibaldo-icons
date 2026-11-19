import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarSearch: ForwardRefExoticComponent<CalendarSearchProps & RefAttributes<Svg>>;

export default CalendarSearch;
export { CalendarSearch };
