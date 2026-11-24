import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkXCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkXCorner: ForwardRefExoticComponent<BookmarkXCornerProps & RefAttributes<Svg>>;

export default BookmarkXCorner;
export { BookmarkXCorner };
