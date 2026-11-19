import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarClockPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarClockPlain: ForwardRefExoticComponent<CalendarClockPlainProps & RefAttributes<Svg>>;

export default CalendarClockPlain;
export { CalendarClockPlain };
