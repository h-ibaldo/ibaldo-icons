import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarDashesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarDashes: ForwardRefExoticComponent<CalendarDashesProps & RefAttributes<Svg>>;

export default CalendarDashes;
export { CalendarDashes };
