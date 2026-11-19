import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkStackMinusEdgeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkStackMinusEdge: ForwardRefExoticComponent<BookmarkStackMinusEdgeProps & RefAttributes<Svg>>;

export default BookmarkStackMinusEdge;
export { BookmarkStackMinusEdge };
