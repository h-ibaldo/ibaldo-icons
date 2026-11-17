import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkStripeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkStripe: ForwardRefExoticComponent<BookmarkStripeProps & RefAttributes<SVGSVGElement>>;

export default BookmarkStripe;
export { BookmarkStripe };
