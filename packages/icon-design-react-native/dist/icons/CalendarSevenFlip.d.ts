import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarSevenFlipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarSevenFlip: ForwardRefExoticComponent<CalendarSevenFlipProps & RefAttributes<Svg>>;

export default CalendarSevenFlip;
export { CalendarSevenFlip };
