import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkXCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkXCorner: ForwardRefExoticComponent<BookmarkXCornerProps & RefAttributes<SVGSVGElement>>;

export default BookmarkXCorner;
export { BookmarkXCorner };
