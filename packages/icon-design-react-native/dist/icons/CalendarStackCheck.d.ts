import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarStackCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarStackCheck: ForwardRefExoticComponent<CalendarStackCheckProps & RefAttributes<Svg>>;

export default CalendarStackCheck;
export { CalendarStackCheck };
