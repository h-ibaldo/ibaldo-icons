import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookBookmarkProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookBookmark: ForwardRefExoticComponent<BookBookmarkProps & RefAttributes<Svg>>;

export default BookBookmark;
export { BookBookmark };
