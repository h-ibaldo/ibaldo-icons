import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarDotted: ForwardRefExoticComponent<CalendarDottedProps & RefAttributes<Svg>>;

export default CalendarDotted;
export { CalendarDotted };
