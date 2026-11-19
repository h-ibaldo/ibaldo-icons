import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkPlus: ForwardRefExoticComponent<BookmarkPlusProps & RefAttributes<Svg>>;

export default BookmarkPlus;
export { BookmarkPlus };
