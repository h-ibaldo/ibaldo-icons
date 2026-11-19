import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookLabelBlockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookLabelBlock: ForwardRefExoticComponent<BookLabelBlockProps & RefAttributes<Svg>>;

export default BookLabelBlock;
export { BookLabelBlock };
