import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkMinusCurlProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkMinusCurl: ForwardRefExoticComponent<BookmarkMinusCurlProps & RefAttributes<Svg>>;

export default BookmarkMinusCurl;
export { BookmarkMinusCurl };
