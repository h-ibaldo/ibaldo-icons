import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkCircleDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkCircleDots: ForwardRefExoticComponent<BookmarkCircleDotsProps & RefAttributes<SVGSVGElement>>;

export default BookmarkCircleDots;
export { BookmarkCircleDots };
