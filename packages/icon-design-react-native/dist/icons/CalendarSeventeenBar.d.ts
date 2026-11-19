import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarSeventeenBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarSeventeenBar: ForwardRefExoticComponent<CalendarSeventeenBarProps & RefAttributes<Svg>>;

export default CalendarSeventeenBar;
export { CalendarSeventeenBar };
