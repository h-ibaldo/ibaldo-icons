import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookStackOverlapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookStackOverlap: ForwardRefExoticComponent<BookStackOverlapProps & RefAttributes<Svg>>;

export default BookStackOverlap;
export { BookStackOverlap };
