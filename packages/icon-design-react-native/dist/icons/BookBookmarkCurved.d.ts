import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookBookmarkCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookBookmarkCurved: ForwardRefExoticComponent<BookBookmarkCurvedProps & RefAttributes<Svg>>;

export default BookBookmarkCurved;
export { BookBookmarkCurved };
