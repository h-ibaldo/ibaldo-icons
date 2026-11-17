import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookBookmarkFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookBookmarkFlipped: ForwardRefExoticComponent<BookBookmarkFlippedProps & RefAttributes<SVGSVGElement>>;

export default BookBookmarkFlipped;
export { BookBookmarkFlipped };
