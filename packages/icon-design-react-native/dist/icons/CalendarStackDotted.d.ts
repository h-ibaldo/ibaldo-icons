import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarStackDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarStackDotted: ForwardRefExoticComponent<CalendarStackDottedProps & RefAttributes<Svg>>;

export default CalendarStackDotted;
export { CalendarStackDotted };
