import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarXCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarXCorner: ForwardRefExoticComponent<CalendarXCornerProps & RefAttributes<Svg>>;

export default CalendarXCorner;
export { CalendarXCorner };
