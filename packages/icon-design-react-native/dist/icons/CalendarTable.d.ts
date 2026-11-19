import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarTableProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarTable: ForwardRefExoticComponent<CalendarTableProps & RefAttributes<Svg>>;

export default CalendarTable;
export { CalendarTable };
