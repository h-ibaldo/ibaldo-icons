import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarXCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarXCircle: ForwardRefExoticComponent<CalendarXCircleProps & RefAttributes<Svg>>;

export default CalendarXCircle;
export { CalendarXCircle };
