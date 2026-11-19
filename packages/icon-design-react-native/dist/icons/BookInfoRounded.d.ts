import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookInfoRoundedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookInfoRounded: ForwardRefExoticComponent<BookInfoRoundedProps & RefAttributes<Svg>>;

export default BookInfoRounded;
export { BookInfoRounded };
