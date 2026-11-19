import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarStarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarStar: ForwardRefExoticComponent<CalendarStarProps & RefAttributes<Svg>>;

export default CalendarStar;
export { CalendarStar };
