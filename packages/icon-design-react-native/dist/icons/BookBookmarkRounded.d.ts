import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookBookmarkRoundedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookBookmarkRounded: ForwardRefExoticComponent<BookBookmarkRoundedProps & RefAttributes<Svg>>;

export default BookBookmarkRounded;
export { BookBookmarkRounded };
