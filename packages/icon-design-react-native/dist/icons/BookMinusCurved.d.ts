import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookMinusCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookMinusCurved: ForwardRefExoticComponent<BookMinusCurvedProps & RefAttributes<Svg>>;

export default BookMinusCurved;
export { BookMinusCurved };
