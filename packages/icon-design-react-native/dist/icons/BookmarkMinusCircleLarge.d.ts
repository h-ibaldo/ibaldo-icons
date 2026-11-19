import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkMinusCircleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkMinusCircleLarge: ForwardRefExoticComponent<BookmarkMinusCircleLargeProps & RefAttributes<Svg>>;

export default BookmarkMinusCircleLarge;
export { BookmarkMinusCircleLarge };
