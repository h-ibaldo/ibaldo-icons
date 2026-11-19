import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookLabelCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookLabelCurved: ForwardRefExoticComponent<BookLabelCurvedProps & RefAttributes<Svg>>;

export default BookLabelCurved;
export { BookLabelCurved };
