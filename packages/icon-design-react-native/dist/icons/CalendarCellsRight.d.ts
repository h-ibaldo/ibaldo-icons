import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarCellsRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarCellsRight: ForwardRefExoticComponent<CalendarCellsRightProps & RefAttributes<Svg>>;

export default CalendarCellsRight;
export { CalendarCellsRight };
