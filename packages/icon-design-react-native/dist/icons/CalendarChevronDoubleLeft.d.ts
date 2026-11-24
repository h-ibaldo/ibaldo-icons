import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarChevronDoubleLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarChevronDoubleLeft: ForwardRefExoticComponent<CalendarChevronDoubleLeftProps & RefAttributes<Svg>>;

export default CalendarChevronDoubleLeft;
export { CalendarChevronDoubleLeft };
