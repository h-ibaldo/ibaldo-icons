import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarMinusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarMinusCircle: ForwardRefExoticComponent<CalendarMinusCircleProps & RefAttributes<Svg>>;

export default CalendarMinusCircle;
export { CalendarMinusCircle };
