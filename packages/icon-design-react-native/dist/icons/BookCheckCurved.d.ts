import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookCheckCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookCheckCurved: ForwardRefExoticComponent<BookCheckCurvedProps & RefAttributes<Svg>>;

export default BookCheckCurved;
export { BookCheckCurved };
