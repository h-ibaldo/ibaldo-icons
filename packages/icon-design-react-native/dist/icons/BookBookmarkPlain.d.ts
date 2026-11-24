import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookBookmarkPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookBookmarkPlain: ForwardRefExoticComponent<BookBookmarkPlainProps & RefAttributes<Svg>>;

export default BookBookmarkPlain;
export { BookBookmarkPlain };
