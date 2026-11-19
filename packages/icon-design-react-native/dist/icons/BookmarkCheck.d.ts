import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkCheck: ForwardRefExoticComponent<BookmarkCheckProps & RefAttributes<Svg>>;

export default BookmarkCheck;
export { BookmarkCheck };
