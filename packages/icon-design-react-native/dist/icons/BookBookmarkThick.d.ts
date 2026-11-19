import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookBookmarkThickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookBookmarkThick: ForwardRefExoticComponent<BookBookmarkThickProps & RefAttributes<Svg>>;

export default BookBookmarkThick;
export { BookBookmarkThick };
