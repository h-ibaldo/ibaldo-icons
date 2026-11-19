import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkStarRolledProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkStarRolled: ForwardRefExoticComponent<BookmarkStarRolledProps & RefAttributes<Svg>>;

export default BookmarkStarRolled;
export { BookmarkStarRolled };
