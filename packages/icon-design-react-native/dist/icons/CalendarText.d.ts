import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarTextProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarText: ForwardRefExoticComponent<CalendarTextProps & RefAttributes<Svg>>;

export default CalendarText;
export { CalendarText };
