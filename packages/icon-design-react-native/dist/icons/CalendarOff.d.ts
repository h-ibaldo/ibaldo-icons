import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarOff: ForwardRefExoticComponent<CalendarOffProps & RefAttributes<Svg>>;

export default CalendarOff;
export { CalendarOff };
