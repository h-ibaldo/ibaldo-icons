import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarArrowDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarArrowDown: ForwardRefExoticComponent<CalendarArrowDownProps & RefAttributes<Svg>>;

export default CalendarArrowDown;
export { CalendarArrowDown };
