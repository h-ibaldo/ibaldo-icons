import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookOpenSquareCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookOpenSquareCurved: ForwardRefExoticComponent<BookOpenSquareCurvedProps & RefAttributes<Svg>>;

export default BookOpenSquareCurved;
export { BookOpenSquareCurved };
