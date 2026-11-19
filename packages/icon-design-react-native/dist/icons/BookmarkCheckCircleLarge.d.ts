import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkCheckCircleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkCheckCircleLarge: ForwardRefExoticComponent<BookmarkCheckCircleLargeProps & RefAttributes<Svg>>;

export default BookmarkCheckCircleLarge;
export { BookmarkCheckCircleLarge };
