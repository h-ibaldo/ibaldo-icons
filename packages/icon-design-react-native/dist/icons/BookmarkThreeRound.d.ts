import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkThreeRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkThreeRound: ForwardRefExoticComponent<BookmarkThreeRoundProps & RefAttributes<Svg>>;

export default BookmarkThreeRound;
export { BookmarkThreeRound };
