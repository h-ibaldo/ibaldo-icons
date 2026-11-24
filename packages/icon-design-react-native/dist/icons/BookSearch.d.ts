import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookSearch: ForwardRefExoticComponent<BookSearchProps & RefAttributes<Svg>>;

export default BookSearch;
export { BookSearch };
