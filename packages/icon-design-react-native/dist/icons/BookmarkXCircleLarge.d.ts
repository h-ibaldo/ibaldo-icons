import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkXCircleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkXCircleLarge: ForwardRefExoticComponent<BookmarkXCircleLargeProps & RefAttributes<Svg>>;

export default BookmarkXCircleLarge;
export { BookmarkXCircleLarge };
