import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarGridDenseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarGridDense: ForwardRefExoticComponent<CalendarGridDenseProps & RefAttributes<Svg>>;

export default CalendarGridDense;
export { CalendarGridDense };
