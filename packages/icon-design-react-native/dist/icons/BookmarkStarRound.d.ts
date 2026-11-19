import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkStarRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkStarRound: ForwardRefExoticComponent<BookmarkStarRoundProps & RefAttributes<Svg>>;

export default BookmarkStarRound;
export { BookmarkStarRound };
