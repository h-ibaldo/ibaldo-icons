import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarPlain: ForwardRefExoticComponent<CalendarPlainProps & RefAttributes<Svg>>;

export default CalendarPlain;
export { CalendarPlain };
