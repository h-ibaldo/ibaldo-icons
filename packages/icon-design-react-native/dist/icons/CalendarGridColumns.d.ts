import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarGridColumnsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarGridColumns: ForwardRefExoticComponent<CalendarGridColumnsProps & RefAttributes<Svg>>;

export default CalendarGridColumns;
export { CalendarGridColumns };
