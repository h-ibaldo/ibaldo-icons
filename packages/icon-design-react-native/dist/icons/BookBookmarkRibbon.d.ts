import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookBookmarkRibbonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookBookmarkRibbon: ForwardRefExoticComponent<BookBookmarkRibbonProps & RefAttributes<Svg>>;

export default BookBookmarkRibbon;
export { BookBookmarkRibbon };
