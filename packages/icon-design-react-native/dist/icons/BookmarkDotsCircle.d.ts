import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkDotsCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkDotsCircle: ForwardRefExoticComponent<BookmarkDotsCircleProps & RefAttributes<Svg>>;

export default BookmarkDotsCircle;
export { BookmarkDotsCircle };
