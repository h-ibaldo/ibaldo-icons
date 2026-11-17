import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BookmarkStarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BookmarkStar: ForwardRefExoticComponent<BookmarkStarProps & RefAttributes<SVGSVGElement>>;

export default BookmarkStar;
export { BookmarkStar };
