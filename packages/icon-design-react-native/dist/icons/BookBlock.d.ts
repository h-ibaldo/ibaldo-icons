import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookBlockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookBlock: ForwardRefExoticComponent<BookBlockProps & RefAttributes<Svg>>;

export default BookBlock;
export { BookBlock };
