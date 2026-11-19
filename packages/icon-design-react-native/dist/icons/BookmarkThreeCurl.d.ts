import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkThreeCurlProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkThreeCurl: ForwardRefExoticComponent<BookmarkThreeCurlProps & RefAttributes<Svg>>;

export default BookmarkThreeCurl;
export { BookmarkThreeCurl };
