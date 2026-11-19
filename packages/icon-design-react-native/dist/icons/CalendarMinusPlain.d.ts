import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarMinusPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarMinusPlain: ForwardRefExoticComponent<CalendarMinusPlainProps & RefAttributes<Svg>>;

export default CalendarMinusPlain;
export { CalendarMinusPlain };
