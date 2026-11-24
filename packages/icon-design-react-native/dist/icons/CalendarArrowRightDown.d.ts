import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarArrowRightDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarArrowRightDown: ForwardRefExoticComponent<CalendarArrowRightDownProps & RefAttributes<Svg>>;

export default CalendarArrowRightDown;
export { CalendarArrowRightDown };
