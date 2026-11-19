import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Bookmark: ForwardRefExoticComponent<BookmarkProps & RefAttributes<Svg>>;

export default Bookmark;
export { Bookmark };
