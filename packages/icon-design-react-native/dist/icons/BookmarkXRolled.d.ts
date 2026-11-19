import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkXRolledProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkXRolled: ForwardRefExoticComponent<BookmarkXRolledProps & RefAttributes<Svg>>;

export default BookmarkXRolled;
export { BookmarkXRolled };
