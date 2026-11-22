import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookArrowRight: ForwardRefExoticComponent<BookArrowRightProps & RefAttributes<Svg>>;

export default BookArrowRight;
export { BookArrowRight };
