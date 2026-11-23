import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarChevronDoubleRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarChevronDoubleRight: ForwardRefExoticComponent<CalendarChevronDoubleRightProps & RefAttributes<Svg>>;

export default CalendarChevronDoubleRight;
export { CalendarChevronDoubleRight };
