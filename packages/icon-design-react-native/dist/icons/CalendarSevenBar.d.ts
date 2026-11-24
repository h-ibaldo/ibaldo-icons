import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarSevenBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarSevenBar: ForwardRefExoticComponent<CalendarSevenBarProps & RefAttributes<Svg>>;

export default CalendarSevenBar;
export { CalendarSevenBar };
