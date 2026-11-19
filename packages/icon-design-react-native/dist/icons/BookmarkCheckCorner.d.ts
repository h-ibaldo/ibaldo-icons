import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkCheckCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkCheckCorner: ForwardRefExoticComponent<BookmarkCheckCornerProps & RefAttributes<Svg>>;

export default BookmarkCheckCorner;
export { BookmarkCheckCorner };
