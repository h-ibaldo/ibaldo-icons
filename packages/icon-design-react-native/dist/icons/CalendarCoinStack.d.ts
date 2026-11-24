import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarCoinStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarCoinStack: ForwardRefExoticComponent<CalendarCoinStackProps & RefAttributes<Svg>>;

export default CalendarCoinStack;
export { CalendarCoinStack };
