import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkStarCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkStarCorner: ForwardRefExoticComponent<BookmarkStarCornerProps & RefAttributes<Svg>>;

export default BookmarkStarCorner;
export { BookmarkStarCorner };
