import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarTriangleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarTriangle: ForwardRefExoticComponent<CalendarTriangleProps & RefAttributes<Svg>>;

export default CalendarTriangle;
export { CalendarTriangle };
