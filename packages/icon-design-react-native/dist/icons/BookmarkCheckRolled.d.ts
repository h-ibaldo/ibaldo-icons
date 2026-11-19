import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkCheckRolledProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkCheckRolled: ForwardRefExoticComponent<BookmarkCheckRolledProps & RefAttributes<Svg>>;

export default BookmarkCheckRolled;
export { BookmarkCheckRolled };
