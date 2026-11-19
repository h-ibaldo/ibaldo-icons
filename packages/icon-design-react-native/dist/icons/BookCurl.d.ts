import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookCurlProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookCurl: ForwardRefExoticComponent<BookCurlProps & RefAttributes<Svg>>;

export default BookCurl;
export { BookCurl };
