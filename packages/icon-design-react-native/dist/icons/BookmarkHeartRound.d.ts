import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkHeartRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkHeartRound: ForwardRefExoticComponent<BookmarkHeartRoundProps & RefAttributes<Svg>>;

export default BookmarkHeartRound;
export { BookmarkHeartRound };
