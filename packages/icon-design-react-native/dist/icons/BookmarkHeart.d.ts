import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkHeartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkHeart: ForwardRefExoticComponent<BookmarkHeartProps & RefAttributes<Svg>>;

export default BookmarkHeart;
export { BookmarkHeart };
