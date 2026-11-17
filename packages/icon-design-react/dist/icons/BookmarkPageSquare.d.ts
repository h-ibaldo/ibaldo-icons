import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkPageSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkPageSquare: ForwardRefExoticComponent<BookmarkPageSquareProps & RefAttributes<SVGSVGElement>>;

export default BookmarkPageSquare;
export { BookmarkPageSquare };
