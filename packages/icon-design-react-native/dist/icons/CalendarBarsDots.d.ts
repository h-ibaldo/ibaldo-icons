import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarBarsDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarBarsDots: ForwardRefExoticComponent<CalendarBarsDotsProps & RefAttributes<Svg>>;

export default CalendarBarsDots;
export { CalendarBarsDots };
