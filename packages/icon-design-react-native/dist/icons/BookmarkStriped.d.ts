import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkStripedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkStriped: ForwardRefExoticComponent<BookmarkStripedProps & RefAttributes<Svg>>;

export default BookmarkStriped;
export { BookmarkStriped };
