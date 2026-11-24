import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookArrowLeftCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookArrowLeftCurved: ForwardRefExoticComponent<BookArrowLeftCurvedProps & RefAttributes<Svg>>;

export default BookArrowLeftCurved;
export { BookArrowLeftCurved };
