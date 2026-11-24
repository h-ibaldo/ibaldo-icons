import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarCandleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarCandle: ForwardRefExoticComponent<CalendarCandleProps & RefAttributes<Svg>>;

export default CalendarCandle;
export { CalendarCandle };
