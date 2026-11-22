import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookArrowDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookArrowDown: ForwardRefExoticComponent<BookArrowDownProps & RefAttributes<Svg>>;

export default BookArrowDown;
export { BookArrowDown };
