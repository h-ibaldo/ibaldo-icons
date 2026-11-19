import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkStackCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkStackCheck: ForwardRefExoticComponent<BookmarkStackCheckProps & RefAttributes<Svg>>;

export default BookmarkStackCheck;
export { BookmarkStackCheck };
