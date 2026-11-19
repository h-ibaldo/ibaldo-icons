import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarDollarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarDollar: ForwardRefExoticComponent<CalendarDollarProps & RefAttributes<Svg>>;

export default CalendarDollar;
export { CalendarDollar };
