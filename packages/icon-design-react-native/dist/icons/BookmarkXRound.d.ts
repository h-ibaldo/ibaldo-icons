import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkXRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkXRound: ForwardRefExoticComponent<BookmarkXRoundProps & RefAttributes<Svg>>;

export default BookmarkXRound;
export { BookmarkXRound };
