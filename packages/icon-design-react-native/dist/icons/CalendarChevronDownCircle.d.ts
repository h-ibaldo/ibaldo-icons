import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarChevronDownCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarChevronDownCircle: ForwardRefExoticComponent<CalendarChevronDownCircleProps & RefAttributes<Svg>>;

export default CalendarChevronDownCircle;
export { CalendarChevronDownCircle };
