import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkDotted: ForwardRefExoticComponent<BookmarkDottedProps & RefAttributes<Svg>>;

export default BookmarkDotted;
export { BookmarkDotted };
