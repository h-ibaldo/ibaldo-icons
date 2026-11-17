import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkMinusCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkMinusCorner: ForwardRefExoticComponent<BookmarkMinusCornerProps & RefAttributes<SVGSVGElement>>;

export default BookmarkMinusCorner;
export { BookmarkMinusCorner };
