import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkPlusCurlProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkPlusCurl: ForwardRefExoticComponent<BookmarkPlusCurlProps & RefAttributes<Svg>>;

export default BookmarkPlusCurl;
export { BookmarkPlusCurl };
