import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarWarningProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarWarning: ForwardRefExoticComponent<CalendarWarningProps & RefAttributes<Svg>>;

export default CalendarWarning;
export { CalendarWarning };
