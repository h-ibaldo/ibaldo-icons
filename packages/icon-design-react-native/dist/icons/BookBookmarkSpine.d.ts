import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookBookmarkSpineProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookBookmarkSpine: ForwardRefExoticComponent<BookBookmarkSpineProps & RefAttributes<Svg>>;

export default BookBookmarkSpine;
export { BookBookmarkSpine };
