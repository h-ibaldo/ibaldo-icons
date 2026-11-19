import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarEyeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarEye: ForwardRefExoticComponent<CalendarEyeProps & RefAttributes<Svg>>;

export default CalendarEye;
export { CalendarEye };
