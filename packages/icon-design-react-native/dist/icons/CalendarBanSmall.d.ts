import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarBanSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarBanSmall: ForwardRefExoticComponent<CalendarBanSmallProps & RefAttributes<Svg>>;

export default CalendarBanSmall;
export { CalendarBanSmall };
