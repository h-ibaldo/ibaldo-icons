import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarPlusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarPlusCircle: ForwardRefExoticComponent<CalendarPlusCircleProps & RefAttributes<Svg>>;

export default CalendarPlusCircle;
export { CalendarPlusCircle };
