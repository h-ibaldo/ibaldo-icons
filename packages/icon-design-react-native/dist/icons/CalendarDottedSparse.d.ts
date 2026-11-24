import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarDottedSparseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarDottedSparse: ForwardRefExoticComponent<CalendarDottedSparseProps & RefAttributes<Svg>>;

export default CalendarDottedSparse;
export { CalendarDottedSparse };
