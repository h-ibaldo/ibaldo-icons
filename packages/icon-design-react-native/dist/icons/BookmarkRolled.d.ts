import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkRolledProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkRolled: ForwardRefExoticComponent<BookmarkRolledProps & RefAttributes<Svg>>;

export default BookmarkRolled;
export { BookmarkRolled };
