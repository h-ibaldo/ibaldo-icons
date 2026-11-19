import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkDotsCircleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkDotsCircleLarge: ForwardRefExoticComponent<BookmarkDotsCircleLargeProps & RefAttributes<Svg>>;

export default BookmarkDotsCircleLarge;
export { BookmarkDotsCircleLarge };
