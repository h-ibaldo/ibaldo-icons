import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookXCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookXCurved: ForwardRefExoticComponent<BookXCurvedProps & RefAttributes<Svg>>;

export default BookXCurved;
export { BookXCurved };
