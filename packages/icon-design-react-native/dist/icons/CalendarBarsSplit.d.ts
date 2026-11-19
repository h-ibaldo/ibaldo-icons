import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarBarsSplitProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarBarsSplit: ForwardRefExoticComponent<CalendarBarsSplitProps & RefAttributes<Svg>>;

export default CalendarBarsSplit;
export { CalendarBarsSplit };
