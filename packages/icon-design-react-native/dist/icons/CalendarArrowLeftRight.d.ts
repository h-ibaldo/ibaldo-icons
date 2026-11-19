import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarArrowLeftRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarArrowLeftRight: ForwardRefExoticComponent<CalendarArrowLeftRightProps & RefAttributes<Svg>>;

export default CalendarArrowLeftRight;
export { CalendarArrowLeftRight };
