import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarPlusPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarPlusPlain: ForwardRefExoticComponent<CalendarPlusPlainProps & RefAttributes<Svg>>;

export default CalendarPlusPlain;
export { CalendarPlusPlain };
