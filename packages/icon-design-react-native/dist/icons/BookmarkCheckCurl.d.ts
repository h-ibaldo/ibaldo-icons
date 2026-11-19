import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkCheckCurlProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkCheckCurl: ForwardRefExoticComponent<BookmarkCheckCurlProps & RefAttributes<Svg>>;

export default BookmarkCheckCurl;
export { BookmarkCheckCurl };
