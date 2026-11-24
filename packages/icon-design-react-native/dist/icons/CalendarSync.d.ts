import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarSyncProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarSync: ForwardRefExoticComponent<CalendarSyncProps & RefAttributes<Svg>>;

export default CalendarSync;
export { CalendarSync };
