import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarCircleDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarCircleDouble: ForwardRefExoticComponent<CalendarCircleDoubleProps & RefAttributes<Svg>>;

export default CalendarCircleDouble;
export { CalendarCircleDouble };
