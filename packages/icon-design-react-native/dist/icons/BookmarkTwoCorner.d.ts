import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkTwoCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkTwoCorner: ForwardRefExoticComponent<BookmarkTwoCornerProps & RefAttributes<Svg>>;

export default BookmarkTwoCorner;
export { BookmarkTwoCorner };
