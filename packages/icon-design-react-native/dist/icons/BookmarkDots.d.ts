import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkDots: ForwardRefExoticComponent<BookmarkDotsProps & RefAttributes<Svg>>;

export default BookmarkDots;
export { BookmarkDots };
