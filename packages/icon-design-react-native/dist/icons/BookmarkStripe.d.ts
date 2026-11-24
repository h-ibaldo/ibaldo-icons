import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookmarkStripeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookmarkStripe: ForwardRefExoticComponent<BookmarkStripeProps & RefAttributes<Svg>>;

export default BookmarkStripe;
export { BookmarkStripe };
