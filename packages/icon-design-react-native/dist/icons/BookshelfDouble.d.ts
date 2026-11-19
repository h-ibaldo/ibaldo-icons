import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookshelfDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookshelfDouble: ForwardRefExoticComponent<BookshelfDoubleProps & RefAttributes<Svg>>;

export default BookshelfDouble;
export { BookshelfDouble };
