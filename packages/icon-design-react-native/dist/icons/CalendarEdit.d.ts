import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarEditProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarEdit: ForwardRefExoticComponent<CalendarEditProps & RefAttributes<Svg>>;

export default CalendarEdit;
export { CalendarEdit };
