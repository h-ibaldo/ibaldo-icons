import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarCurlProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarCurl: ForwardRefExoticComponent<CalendarCurlProps & RefAttributes<Svg>>;

export default CalendarCurl;
export { CalendarCurl };
