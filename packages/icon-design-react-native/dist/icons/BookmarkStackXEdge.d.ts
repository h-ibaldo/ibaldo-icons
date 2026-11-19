import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkStackXEdgeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkStackXEdge: ForwardRefExoticComponent<BookmarkStackXEdgeProps & RefAttributes<Svg>>;

export default BookmarkStackXEdge;
export { BookmarkStackXEdge };
