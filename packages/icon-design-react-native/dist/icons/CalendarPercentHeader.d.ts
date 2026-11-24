import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarPercentHeaderProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarPercentHeader: ForwardRefExoticComponent<CalendarPercentHeaderProps & RefAttributes<Svg>>;

export default CalendarPercentHeader;
export { CalendarPercentHeader };
