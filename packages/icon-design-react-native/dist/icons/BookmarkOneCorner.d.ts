import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkOneCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkOneCorner: ForwardRefExoticComponent<BookmarkOneCornerProps & RefAttributes<Svg>>;

export default BookmarkOneCorner;
export { BookmarkOneCorner };
