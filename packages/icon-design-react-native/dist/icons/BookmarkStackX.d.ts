import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkStackXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkStackX: ForwardRefExoticComponent<BookmarkStackXProps & RefAttributes<Svg>>;

export default BookmarkStackX;
export { BookmarkStackX };
