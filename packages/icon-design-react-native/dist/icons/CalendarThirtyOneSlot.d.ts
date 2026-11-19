import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarThirtyOneSlotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarThirtyOneSlot: ForwardRefExoticComponent<CalendarThirtyOneSlotProps & RefAttributes<Svg>>;

export default CalendarThirtyOneSlot;
export { CalendarThirtyOneSlot };
