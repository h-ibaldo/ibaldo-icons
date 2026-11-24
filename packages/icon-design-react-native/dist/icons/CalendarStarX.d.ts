import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarStarXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarStarX: ForwardRefExoticComponent<CalendarStarXProps & RefAttributes<Svg>>;

export default CalendarStarX;
export { CalendarStarX };
