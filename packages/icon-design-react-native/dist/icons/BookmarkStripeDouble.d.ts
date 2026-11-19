import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkStripeDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkStripeDouble: ForwardRefExoticComponent<BookmarkStripeDoubleProps & RefAttributes<Svg>>;

export default BookmarkStripeDouble;
export { BookmarkStripeDouble };
