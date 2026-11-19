import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkMinusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkMinusCircle: ForwardRefExoticComponent<BookmarkMinusCircleProps & RefAttributes<Svg>>;

export default BookmarkMinusCircle;
export { BookmarkMinusCircle };
