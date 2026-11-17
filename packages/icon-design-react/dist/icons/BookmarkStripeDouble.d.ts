import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkStripeDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkStripeDouble: ForwardRefExoticComponent<BookmarkStripeDoubleProps & RefAttributes<SVGSVGElement>>;

export default BookmarkStripeDouble;
export { BookmarkStripeDouble };
