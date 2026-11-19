import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarFlipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarFlip: ForwardRefExoticComponent<CalendarFlipProps & RefAttributes<Svg>>;

export default CalendarFlip;
export { CalendarFlip };
