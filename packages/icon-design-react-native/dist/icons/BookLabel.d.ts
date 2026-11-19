import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookLabelProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookLabel: ForwardRefExoticComponent<BookLabelProps & RefAttributes<Svg>>;

export default BookLabel;
export { BookLabel };
