import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarRowsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarRows: ForwardRefExoticComponent<CalendarRowsProps & RefAttributes<Svg>>;

export default CalendarRows;
export { CalendarRows };
