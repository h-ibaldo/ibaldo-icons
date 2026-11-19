import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkCircle: ForwardRefExoticComponent<BookmarkCircleProps & RefAttributes<Svg>>;

export default BookmarkCircle;
export { BookmarkCircle };
