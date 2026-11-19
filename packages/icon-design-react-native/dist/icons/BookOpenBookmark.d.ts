import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookOpenBookmarkProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookOpenBookmark: ForwardRefExoticComponent<BookOpenBookmarkProps & RefAttributes<Svg>>;

export default BookOpenBookmark;
export { BookOpenBookmark };
