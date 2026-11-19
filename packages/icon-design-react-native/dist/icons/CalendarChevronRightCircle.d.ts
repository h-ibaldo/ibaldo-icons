import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarChevronRightCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarChevronRightCircle: ForwardRefExoticComponent<CalendarChevronRightCircleProps & RefAttributes<Svg>>;

export default CalendarChevronRightCircle;
export { CalendarChevronRightCircle };
