import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkThreeCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkThreeCorner: ForwardRefExoticComponent<BookmarkThreeCornerProps & RefAttributes<Svg>>;

export default BookmarkThreeCorner;
export { BookmarkThreeCorner };
