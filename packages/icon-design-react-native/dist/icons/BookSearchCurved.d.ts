import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookSearchCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookSearchCurved: ForwardRefExoticComponent<BookSearchCurvedProps & RefAttributes<Svg>>;

export default BookSearchCurved;
export { BookSearchCurved };
