import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarPlus: ForwardRefExoticComponent<CalendarPlusProps & RefAttributes<Svg>>;

export default CalendarPlus;
export { CalendarPlus };
