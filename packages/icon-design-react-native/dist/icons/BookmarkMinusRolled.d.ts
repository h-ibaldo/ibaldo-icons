import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkMinusRolledProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkMinusRolled: ForwardRefExoticComponent<BookmarkMinusRolledProps & RefAttributes<Svg>>;

export default BookmarkMinusRolled;
export { BookmarkMinusRolled };
