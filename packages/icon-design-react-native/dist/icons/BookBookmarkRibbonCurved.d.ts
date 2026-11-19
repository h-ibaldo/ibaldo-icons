import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookBookmarkRibbonCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookBookmarkRibbonCurved: ForwardRefExoticComponent<BookBookmarkRibbonCurvedProps & RefAttributes<Svg>>;

export default BookBookmarkRibbonCurved;
export { BookBookmarkRibbonCurved };
