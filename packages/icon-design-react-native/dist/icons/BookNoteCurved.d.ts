import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookNoteCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookNoteCurved: ForwardRefExoticComponent<BookNoteCurvedProps & RefAttributes<Svg>>;

export default BookNoteCurved;
export { BookNoteCurved };
