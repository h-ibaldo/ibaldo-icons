import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkStackCheckEdgeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkStackCheckEdge: ForwardRefExoticComponent<BookmarkStackCheckEdgeProps & RefAttributes<Svg>>;

export default BookmarkStackCheckEdge;
export { BookmarkStackCheckEdge };
