import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarEditPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarEditPlain: ForwardRefExoticComponent<CalendarEditPlainProps & RefAttributes<Svg>>;

export default CalendarEditPlain;
export { CalendarEditPlain };
