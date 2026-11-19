import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkCurlProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkCurl: ForwardRefExoticComponent<BookmarkCurlProps & RefAttributes<Svg>>;

export default BookmarkCurl;
export { BookmarkCurl };
