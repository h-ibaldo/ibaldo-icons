import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkOffRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkOffRound: ForwardRefExoticComponent<BookmarkOffRoundProps & RefAttributes<Svg>>;

export default BookmarkOffRound;
export { BookmarkOffRound };
