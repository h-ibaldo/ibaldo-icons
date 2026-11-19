import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkStackEdgeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkStackEdge: ForwardRefExoticComponent<BookmarkStackEdgeProps & RefAttributes<Svg>>;

export default BookmarkStackEdge;
export { BookmarkStackEdge };
