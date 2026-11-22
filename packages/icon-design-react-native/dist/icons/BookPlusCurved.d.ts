import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookPlusCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookPlusCurved: ForwardRefExoticComponent<BookPlusCurvedProps & RefAttributes<Svg>>;

export default BookPlusCurved;
export { BookPlusCurved };
