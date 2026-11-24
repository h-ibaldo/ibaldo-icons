import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarArrowLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarArrowLeft: ForwardRefExoticComponent<CalendarArrowLeftProps & RefAttributes<Svg>>;

export default CalendarArrowLeft;
export { CalendarArrowLeft };
