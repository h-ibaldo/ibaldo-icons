import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarArrowRightInProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarArrowRightIn: ForwardRefExoticComponent<CalendarArrowRightInProps & RefAttributes<Svg>>;

export default CalendarArrowRightIn;
export { CalendarArrowRightIn };
