import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkOneRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkOneRound: ForwardRefExoticComponent<BookmarkOneRoundProps & RefAttributes<Svg>>;

export default BookmarkOneRound;
export { BookmarkOneRound };
