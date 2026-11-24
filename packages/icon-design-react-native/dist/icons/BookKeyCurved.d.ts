import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookKeyCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookKeyCurved: ForwardRefExoticComponent<BookKeyCurvedProps & RefAttributes<Svg>>;

export default BookKeyCurved;
export { BookKeyCurved };
