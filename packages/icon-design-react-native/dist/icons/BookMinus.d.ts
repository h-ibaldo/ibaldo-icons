import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookMinus: ForwardRefExoticComponent<BookMinusProps & RefAttributes<Svg>>;

export default BookMinus;
export { BookMinus };
