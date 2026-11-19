import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookInfoThickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookInfoThick: ForwardRefExoticComponent<BookInfoThickProps & RefAttributes<Svg>>;

export default BookInfoThick;
export { BookInfoThick };
