import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarGridBoxProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarGridBox: ForwardRefExoticComponent<CalendarGridBoxProps & RefAttributes<Svg>>;

export default CalendarGridBox;
export { CalendarGridBox };
