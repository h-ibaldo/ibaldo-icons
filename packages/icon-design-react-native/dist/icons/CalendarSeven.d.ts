import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarSevenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarSeven: ForwardRefExoticComponent<CalendarSevenProps & RefAttributes<Svg>>;

export default CalendarSeven;
export { CalendarSeven };
