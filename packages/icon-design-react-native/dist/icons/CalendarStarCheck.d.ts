import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarStarCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarStarCheck: ForwardRefExoticComponent<CalendarStarCheckProps & RefAttributes<Svg>>;

export default CalendarStarCheck;
export { CalendarStarCheck };
