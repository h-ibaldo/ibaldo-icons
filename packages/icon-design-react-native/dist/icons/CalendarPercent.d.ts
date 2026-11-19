import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarPercentProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarPercent: ForwardRefExoticComponent<CalendarPercentProps & RefAttributes<Svg>>;

export default CalendarPercent;
export { CalendarPercent };
