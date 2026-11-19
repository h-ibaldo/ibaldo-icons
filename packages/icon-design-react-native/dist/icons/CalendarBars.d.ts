import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarBarsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarBars: ForwardRefExoticComponent<CalendarBarsProps & RefAttributes<Svg>>;

export default CalendarBars;
export { CalendarBars };
