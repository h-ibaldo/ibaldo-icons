import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookKeyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookKey: ForwardRefExoticComponent<BookKeyProps & RefAttributes<Svg>>;

export default BookKey;
export { BookKey };
