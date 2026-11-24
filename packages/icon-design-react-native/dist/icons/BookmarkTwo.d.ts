import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkTwoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkTwo: ForwardRefExoticComponent<BookmarkTwoProps & RefAttributes<Svg>>;

export default BookmarkTwo;
export { BookmarkTwo };
