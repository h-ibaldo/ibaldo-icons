import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkSearch: ForwardRefExoticComponent<BookmarkSearchProps & RefAttributes<Svg>>;

export default BookmarkSearch;
export { BookmarkSearch };
