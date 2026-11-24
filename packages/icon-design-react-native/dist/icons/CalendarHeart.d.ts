import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarHeartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarHeart: ForwardRefExoticComponent<CalendarHeartProps & RefAttributes<Svg>>;

export default CalendarHeart;
export { CalendarHeart };
