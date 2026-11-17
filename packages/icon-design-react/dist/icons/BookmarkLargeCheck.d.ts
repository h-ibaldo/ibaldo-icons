import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkLargeCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkLargeCheck: ForwardRefExoticComponent<BookmarkLargeCheckProps & RefAttributes<SVGSVGElement>>;

export default BookmarkLargeCheck;
export { BookmarkLargeCheck };
