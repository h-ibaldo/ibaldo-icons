import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarMusicProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarMusic: ForwardRefExoticComponent<CalendarMusicProps & RefAttributes<Svg>>;

export default CalendarMusic;
export { CalendarMusic };
