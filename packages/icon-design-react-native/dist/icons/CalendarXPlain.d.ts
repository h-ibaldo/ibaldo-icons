import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarXPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarXPlain: ForwardRefExoticComponent<CalendarXPlainProps & RefAttributes<Svg>>;

export default CalendarXPlain;
export { CalendarXPlain };
