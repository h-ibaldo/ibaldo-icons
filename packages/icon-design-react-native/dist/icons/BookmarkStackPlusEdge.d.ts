import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkStackPlusEdgeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkStackPlusEdge: ForwardRefExoticComponent<BookmarkStackPlusEdgeProps & RefAttributes<Svg>>;

export default BookmarkStackPlusEdge;
export { BookmarkStackPlusEdge };
