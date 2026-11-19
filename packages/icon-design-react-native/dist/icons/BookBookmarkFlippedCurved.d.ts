import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookBookmarkFlippedCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookBookmarkFlippedCurved: ForwardRefExoticComponent<BookBookmarkFlippedCurvedProps & RefAttributes<Svg>>;

export default BookBookmarkFlippedCurved;
export { BookBookmarkFlippedCurved };
