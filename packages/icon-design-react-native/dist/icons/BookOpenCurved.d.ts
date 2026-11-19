import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookOpenCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookOpenCurved: ForwardRefExoticComponent<BookOpenCurvedProps & RefAttributes<Svg>>;

export default BookOpenCurved;
export { BookOpenCurved };
