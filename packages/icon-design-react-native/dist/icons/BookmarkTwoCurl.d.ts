import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkTwoCurlProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkTwoCurl: ForwardRefExoticComponent<BookmarkTwoCurlProps & RefAttributes<Svg>>;

export default BookmarkTwoCurl;
export { BookmarkTwoCurl };
