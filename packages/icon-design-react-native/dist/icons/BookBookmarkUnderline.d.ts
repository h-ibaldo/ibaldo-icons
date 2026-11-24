import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookBookmarkUnderlineProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookBookmarkUnderline: ForwardRefExoticComponent<BookBookmarkUnderlineProps & RefAttributes<Svg>>;

export default BookBookmarkUnderline;
export { BookBookmarkUnderline };
