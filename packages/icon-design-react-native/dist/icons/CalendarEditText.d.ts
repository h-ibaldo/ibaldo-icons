import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarEditTextProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarEditText: ForwardRefExoticComponent<CalendarEditTextProps & RefAttributes<Svg>>;

export default CalendarEditText;
export { CalendarEditText };
