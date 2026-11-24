import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkStack: ForwardRefExoticComponent<BookmarkStackProps & RefAttributes<Svg>>;

export default BookmarkStack;
export { BookmarkStack };
