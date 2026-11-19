import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkStarLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkStarLarge: ForwardRefExoticComponent<BookmarkStarLargeProps & RefAttributes<Svg>>;

export default BookmarkStarLarge;
export { BookmarkStarLarge };
