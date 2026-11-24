import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarSeventeenHeaderProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarSeventeenHeader: ForwardRefExoticComponent<CalendarSeventeenHeaderProps & RefAttributes<Svg>>;

export default CalendarSeventeenHeader;
export { CalendarSeventeenHeader };
