import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkPlusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkPlusCircle: ForwardRefExoticComponent<BookmarkPlusCircleProps & RefAttributes<Svg>>;

export default BookmarkPlusCircle;
export { BookmarkPlusCircle };
