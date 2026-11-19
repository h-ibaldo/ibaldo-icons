import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkCheckCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkCheckCircle: ForwardRefExoticComponent<BookmarkCheckCircleProps & RefAttributes<Svg>>;

export default BookmarkCheckCircle;
export { BookmarkCheckCircle };
