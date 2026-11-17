import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkStarCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkStarCorner: ForwardRefExoticComponent<BookmarkStarCornerProps & RefAttributes<SVGSVGElement>>;

export default BookmarkStarCorner;
export { BookmarkStarCorner };
