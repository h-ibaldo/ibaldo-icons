import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkPage2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkPage2: ForwardRefExoticComponent<BookmarkPage2Props & RefAttributes<Svg>>;

export default BookmarkPage2;
export { BookmarkPage2 };
