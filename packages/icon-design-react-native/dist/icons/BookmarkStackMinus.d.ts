import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkStackMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkStackMinus: ForwardRefExoticComponent<BookmarkStackMinusProps & RefAttributes<Svg>>;

export default BookmarkStackMinus;
export { BookmarkStackMinus };
