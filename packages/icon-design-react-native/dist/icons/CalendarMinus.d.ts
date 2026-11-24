import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarMinus: ForwardRefExoticComponent<CalendarMinusProps & RefAttributes<Svg>>;

export default CalendarMinus;
export { CalendarMinus };
