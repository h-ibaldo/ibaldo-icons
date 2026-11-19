import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarDots: ForwardRefExoticComponent<CalendarDotsProps & RefAttributes<Svg>>;

export default CalendarDots;
export { CalendarDots };
