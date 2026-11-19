import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkXCurlProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkXCurl: ForwardRefExoticComponent<BookmarkXCurlProps & RefAttributes<Svg>>;

export default BookmarkXCurl;
export { BookmarkXCurl };
