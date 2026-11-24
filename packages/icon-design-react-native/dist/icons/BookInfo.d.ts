import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookInfoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookInfo: ForwardRefExoticComponent<BookInfoProps & RefAttributes<Svg>>;

export default BookInfo;
export { BookInfo };
