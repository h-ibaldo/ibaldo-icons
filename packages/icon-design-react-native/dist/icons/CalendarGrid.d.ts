import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarGridProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarGrid: ForwardRefExoticComponent<CalendarGridProps & RefAttributes<Svg>>;

export default CalendarGrid;
export { CalendarGrid };
