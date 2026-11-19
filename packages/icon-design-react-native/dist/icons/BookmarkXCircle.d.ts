import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkXCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkXCircle: ForwardRefExoticComponent<BookmarkXCircleProps & RefAttributes<Svg>>;

export default BookmarkXCircle;
export { BookmarkXCircle };
