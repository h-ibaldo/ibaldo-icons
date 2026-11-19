import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkPageProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkPage: ForwardRefExoticComponent<BookmarkPageProps & RefAttributes<Svg>>;

export default BookmarkPage;
export { BookmarkPage };
