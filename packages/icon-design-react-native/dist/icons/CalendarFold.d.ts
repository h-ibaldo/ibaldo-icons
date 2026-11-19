import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarFoldProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarFold: ForwardRefExoticComponent<CalendarFoldProps & RefAttributes<Svg>>;

export default CalendarFold;
export { CalendarFold };
