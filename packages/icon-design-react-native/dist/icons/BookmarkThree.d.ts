import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkThreeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkThree: ForwardRefExoticComponent<BookmarkThreeProps & RefAttributes<Svg>>;

export default BookmarkThree;
export { BookmarkThree };
