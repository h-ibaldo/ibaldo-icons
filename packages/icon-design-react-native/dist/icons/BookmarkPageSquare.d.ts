import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkPageSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkPageSquare: ForwardRefExoticComponent<BookmarkPageSquareProps & RefAttributes<Svg>>;

export default BookmarkPageSquare;
export { BookmarkPageSquare };
