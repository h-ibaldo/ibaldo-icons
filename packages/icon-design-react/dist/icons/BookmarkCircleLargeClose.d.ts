import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkCircleLargeCloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkCircleLargeClose: ForwardRefExoticComponent<BookmarkCircleLargeCloseProps & RefAttributes<SVGSVGElement>>;

export default BookmarkCircleLargeClose;
export { BookmarkCircleLargeClose };
