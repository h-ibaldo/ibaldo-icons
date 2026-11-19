import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarSyncSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarSyncSmall: ForwardRefExoticComponent<CalendarSyncSmallProps & RefAttributes<Svg>>;

export default CalendarSyncSmall;
export { CalendarSyncSmall };
