import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarSevenSlotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarSevenSlot: ForwardRefExoticComponent<CalendarSevenSlotProps & RefAttributes<Svg>>;

export default CalendarSevenSlot;
export { CalendarSevenSlot };
