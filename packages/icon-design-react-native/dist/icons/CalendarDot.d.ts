import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarDot: ForwardRefExoticComponent<CalendarDotProps & RefAttributes<Svg>>;

export default CalendarDot;
export { CalendarDot };
