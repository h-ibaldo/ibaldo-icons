import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookArrowDownCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookArrowDownCurved: ForwardRefExoticComponent<BookArrowDownCurvedProps & RefAttributes<Svg>>;

export default BookArrowDownCurved;
export { BookArrowDownCurved };
