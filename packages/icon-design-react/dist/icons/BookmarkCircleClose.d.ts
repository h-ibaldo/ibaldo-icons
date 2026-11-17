import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkCircleCloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkCircleClose: ForwardRefExoticComponent<BookmarkCircleCloseProps & RefAttributes<SVGSVGElement>>;

export default BookmarkCircleClose;
export { BookmarkCircleClose };
