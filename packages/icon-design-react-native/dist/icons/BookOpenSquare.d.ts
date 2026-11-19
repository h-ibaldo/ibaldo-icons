import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookOpenSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookOpenSquare: ForwardRefExoticComponent<BookOpenSquareProps & RefAttributes<Svg>>;

export default BookOpenSquare;
export { BookOpenSquare };
