import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarOneSlotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarOneSlot: ForwardRefExoticComponent<CalendarOneSlotProps & RefAttributes<Svg>>;

export default CalendarOneSlot;
export { CalendarOneSlot };
