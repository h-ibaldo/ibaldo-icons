import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarCellsLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarCellsLeft: ForwardRefExoticComponent<CalendarCellsLeftProps & RefAttributes<Svg>>;

export default CalendarCellsLeft;
export { CalendarCellsLeft };
