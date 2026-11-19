import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkSquare: ForwardRefExoticComponent<BookmarkSquareProps & RefAttributes<Svg>>;

export default BookmarkSquare;
export { BookmarkSquare };
