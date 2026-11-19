import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarChevronUpDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarChevronUpDown: ForwardRefExoticComponent<CalendarChevronUpDownProps & RefAttributes<Svg>>;

export default CalendarChevronUpDown;
export { CalendarChevronUpDown };
