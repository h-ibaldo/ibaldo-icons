import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkSquare: ForwardRefExoticComponent<BookmarkSquareProps & RefAttributes<SVGSVGElement>>;

export default BookmarkSquare;
export { BookmarkSquare };
