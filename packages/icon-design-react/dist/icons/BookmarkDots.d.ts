import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkDots: ForwardRefExoticComponent<BookmarkDotsProps & RefAttributes<SVGSVGElement>>;

export default BookmarkDots;
export { BookmarkDots };
