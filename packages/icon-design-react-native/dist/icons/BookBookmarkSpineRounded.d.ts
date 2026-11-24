import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookBookmarkSpineRoundedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookBookmarkSpineRounded: ForwardRefExoticComponent<BookBookmarkSpineRoundedProps & RefAttributes<Svg>>;

export default BookBookmarkSpineRounded;
export { BookBookmarkSpineRounded };
