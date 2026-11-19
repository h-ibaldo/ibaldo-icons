import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkStarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkStar: ForwardRefExoticComponent<BookmarkStarProps & RefAttributes<Svg>>;

export default BookmarkStar;
export { BookmarkStar };
