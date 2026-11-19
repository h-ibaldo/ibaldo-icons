import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkTwoRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkTwoRound: ForwardRefExoticComponent<BookmarkTwoRoundProps & RefAttributes<Svg>>;

export default BookmarkTwoRound;
export { BookmarkTwoRound };
