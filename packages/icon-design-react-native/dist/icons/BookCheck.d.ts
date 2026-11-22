import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookCheck: ForwardRefExoticComponent<BookCheckProps & RefAttributes<Svg>>;

export default BookCheck;
export { BookCheck };
