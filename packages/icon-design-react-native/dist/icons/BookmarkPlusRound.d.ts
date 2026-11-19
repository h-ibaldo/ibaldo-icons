import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkPlusRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkPlusRound: ForwardRefExoticComponent<BookmarkPlusRoundProps & RefAttributes<Svg>>;

export default BookmarkPlusRound;
export { BookmarkPlusRound };
