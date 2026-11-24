import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarLockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarLock: ForwardRefExoticComponent<CalendarLockProps & RefAttributes<Svg>>;

export default CalendarLock;
export { CalendarLock };
