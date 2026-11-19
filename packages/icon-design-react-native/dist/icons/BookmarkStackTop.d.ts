import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkStackTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkStackTop: ForwardRefExoticComponent<BookmarkStackTopProps & RefAttributes<Svg>>;

export default BookmarkStackTop;
export { BookmarkStackTop };
