import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookCurved: ForwardRefExoticComponent<BookCurvedProps & RefAttributes<Svg>>;

export default BookCurved;
export { BookCurved };
