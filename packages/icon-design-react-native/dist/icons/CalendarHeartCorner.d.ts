import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarHeartCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarHeartCorner: ForwardRefExoticComponent<CalendarHeartCornerProps & RefAttributes<Svg>>;

export default CalendarHeartCorner;
export { CalendarHeartCorner };
