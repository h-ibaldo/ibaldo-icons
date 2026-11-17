import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkLargeDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkLargeDots: ForwardRefExoticComponent<BookmarkLargeDotsProps & RefAttributes<SVGSVGElement>>;

export default BookmarkLargeDots;
export { BookmarkLargeDots };
