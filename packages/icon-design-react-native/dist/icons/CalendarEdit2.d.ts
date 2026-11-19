import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarEdit2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarEdit2: ForwardRefExoticComponent<CalendarEdit2Props & RefAttributes<Svg>>;

export default CalendarEdit2;
export { CalendarEdit2 };
